'use strict';

(function() {

    function findTarget(evt, targetNode, container) {

        // start with innermost element node
        let currentNode = evt.target;

        // move up through element nodes, until we reach the contatining one
        while (currentNode && currentNode !== container) {
            
            // return a reference to the first node we match
            if (currentNode.nodeName.toLowerCase() === targetNode.toLowerCase()) {
                return currentNode;
            }

            // no match yet; move up to the parent
            else {
                currentNode = currentNode.parentNode;
            }
        }

        // if we did not return a matching element node, return false
        return false;

    }

    function changeCounter(evt) {

        // get the current value for the counter and what the increment/decrement will be
        // use Number() because they'll initially be strings
        const changeVal = Number(document.getElementById('stepControlVal').value);
        let val = Number(count.innerText);

        // Figure out if the button selected was add or subtract
        const btn = findTarget(evt, 'div', this);
        if (!btn) {return;}

        if(btn) {
            btn.id === 'add' ? val += changeVal : val -= changeVal;
            count.innerText = val;
        }

    }

    function reset(evt) {
        // reset the counter to zero
        count.innerText = 0;
    }

    const count = document.getElementById('count');
    const controls = document.getElementById('controls');
    const resetBtn = document.getElementById('resetBtn');

    controls.addEventListener('click', changeCounter, false);
    resetBtn.addEventListener('click', reset, false);

})();