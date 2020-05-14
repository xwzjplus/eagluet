module.exports.base = {
    CLOSE: document.querySelector(".close__btn"),
    MINIMIZE: document.querySelector(".minimize__btn"),
    TIMER_SETTING: document.querySelector(".timer__btn"),
    TIMER_SETTING_AREA: document.querySelector(".timer-setting__area"),
    CANCEL: document.querySelector(".cancel__btn"),
    SAVE: document.querySelector(".save__btn"),
    TIMER_SETTING_BOX: document.querySelectorAll(".timer-setting__box"),
    CLOCK_MINUTES: document.querySelector(".clock__minutes"),
    CLOCK_SECONDS: document.querySelector(".clock__seconds"),
    CLOCK_PLAY: document.querySelector(".clock__play"),
    CLOCK_STOP: document.querySelector(".clock__stop"),
    RANGE_SLIDER: document.querySelectorAll(".range-slider__range"),
};

module.exports.debounce = (func, delay) => {
    let inDebounce;
    return function () {
        const context = this;
        const args = arguments
        clearTimeout(inDebounce)
        inDebounce = setTimeout(() => func.apply(context, args), delay)
    }
}

