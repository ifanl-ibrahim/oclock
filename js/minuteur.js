function CountDown(hours, minutes, seconds) {
    this.state = CountDown.prototype.STOPPED;
}

CountDown.prototype.STOPPED = 'stopped';
CountDown.prototype.STARTED = 'started';
CountDown.prototype.PAUSED = 'paused';
CountDown.prototype.interval = 200;
CountDown.prototype.ms_per_second = 1000;
CountDown.prototype.ms_per_minute = 60 * CountDown.prototype.ms_per_second;
CountDown.prototype.ms_per_hour = 60 * CountDown.prototype.ms_per_minute;

CountDown.prototype.parse_count = function(ms) {
    var count = ms === undefined ? this.count_ms : ms;

    var seconds = Math.floor((count / this.ms_per_second) % 60);
    var minutes = Math.floor((count / this.ms_per_minute) % 60);
    var hours = Math.floor((count / this.ms_per_hour) % 24);

    return {
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
};

CountDown.prototype._set_countdown_time = function(hours, minutes, seconds) {
    this.count_ms = 0;

    if (hours !== undefined) {
        this.count_ms += hours * this.ms_per_hour;
    }

    if (minutes !== undefined) {
        this.count_ms += minutes * this.ms_per_minute;
    }

    if (seconds !== undefined) {
        this.count_ms += seconds * this.ms_per_second;
    }
};

CountDown.prototype._start_timer= function () {
    var self = this;

    var interval = this.interval === undefined ? 200 : this.interval;

    this.start_time = Date.now();
    this.timer = window.setInterval(function () {
        // 1. update the counter information
        var current_time = Date.now();
        self.count_ms -= (current_time - self.start_time);
        self.start_time = current_time;

        // 2. check for timer end
        if (self.count_ms <= 0) {
            this.state = CountDown.prototype.STOPPED;
            clearInterval(self.timer);
            self.end_hook();
            return;
        }

        self.interval_hook();
    }, interval);
    self.interval_hook();

    this.state = CountDown.prototype.STARTED;
};

CountDown.prototype.start = function () {
    if (this.timer !== undefined) {
        clearInterval(this.timer);
    }

    this._set_countdown_time.apply(this, arguments);

    this._start_timer();
};

CountDown.prototype.resume = function () {
    if (this.timer !== undefined) {
        clearInterval(this.timer);
        this._start_timer();
    }
};

CountDown.prototype.stop = function () {
    this.state = CountDown.prototype.STOPPED;
    clearInterval(this.timer);
    this.stop_hook();
};

CountDown.prototype.pause = function() {
    this.state = CountDown.prototype.PAUSED;
    clearInterval(this.timer);
    this.pause_hook();
};

CountDown.prototype.interval_hook = function() {
    console.log(this.count_ms);
    var count_down = new Date(this.count_ms);
    console.log(count_down);
};

CountDown.prototype.end_hook = function() {
    console.log("count end");
};

CountDown.prototype.stop_hook = function() {
    console.log("count stopped");
};

CountDown.prototype.pause_hook = function() {
    console.log("count paused");
};

window.onload = function () {
    var btn_start = document.getElementById('start');
    var btn_stop = document.getElementById('stop');
    var btn_pause = document.getElementById('pause');
    var btn_resume = document.getElementById('resume');

    var countdown = new CountDown();

    countdown.interval_hook = function () {
        var time_info = this.parse_count();

        var display_hours = document.getElementById('display-hours');
        var display_minutes = document.getElementById('display-minutes');
        var display_seconds = document.getElementById('display-seconds');

        display_hours.innerHTML = ('0' + time_info.hours).slice(-2);
        display_minutes.innerHTML = ('0' + time_info.minutes).slice(-2);
        display_seconds.innerHTML = ('0' + time_info.seconds).slice(-2);
    };

    btn_start.addEventListener('click', function() {
        var hours = Number(document.getElementById('hours').value);
        var minutes = Number(document.getElementById('minutes').value);
        var seconds = Number(document.getElementById('seconds').value);
        countdown.start(hours, minutes, seconds);
    });

    btn_pause.addEventListener('click', function() {
        countdown.pause();
        btn_pause.style.display = 'none';
        btn_resume.style.display = 'initial';
    });

    btn_resume.addEventListener('click', function() {
        countdown.resume();
        btn_pause.style.display = 'initial';
        btn_resume.style.display = 'none';
    });
};