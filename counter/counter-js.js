'use strict';

(function() {

    function changeCounter(evt) {

        // get the current value for the counter and what the increment/decrement will be
        // use Number() because they'll initially be strings
        const changeVal = Number(document.getElementById('stepControlVal').value);
        let val = Number(count.innerText);

        const btn = evt.target;

        // use the id to determine what operation we should apply to the counter
        // if it's reset, turn the counter to 0
        // if it's add or subtract, apply the increment/decrement value to the current value
        if (btn.id === 'resetBtn') {
            count.innerText = 0;
        } else {
            btn.id === 'add' ? val += changeVal : val -= changeVal;
            count.innerText = val;
        }
    }
    // the actual counter value
    const count = document.getElementById('count');

    // returns a node list of the 3 buttons that change the counter's value
    // then loops through that node list adding a clickable event
    const btns = document.querySelectorAll('.btn');
    btns.forEach(btn => btn.addEventListener('click', changeCounter, false));

})();