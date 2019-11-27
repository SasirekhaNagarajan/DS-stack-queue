let stackArray = [];
let queueArray = [];

function onCall(data) {
    if(data === '') return;

    document.getElementById('result').innerHTML = '';

    if(data === 'stack') {
        // alert("You have selected STACK operation");
        document.getElementById('push').disabled = false;
        document.getElementById('pop').disabled = false;
        document.getElementById('peek').disabled = false;

        document.getElementById('enqueue').disabled = true;
        document.getElementById('dequeue').disabled = true;
        
        document.getElementById('stack').style.opacity = '1.0';
        document.getElementById('queue').style.opacity = '0.4';
    } else {
        // alert("You have selected QUEUE operation");
        document.getElementById('push').disabled = true;
        document.getElementById('pop').disabled = true;
        document.getElementById('peek').disabled = true;

        document.getElementById('enqueue').disabled = false;
        document.getElementById('dequeue').disabled = false;
        
        document.getElementById('queue').style.opacity = '1.0';
        document.getElementById('stack').style.opacity = '0.4';
    }
}

    function onStack(operation) {
        //variable declaration
        // debugger;
        let elt = document.getElementById('sdata').value;
        let resultDom = document.getElementById('result');

        if(elt === '') {
            alert("Please enter any value...");
            return;
        }

        //inserting element at the end of  stackArray
        if(operation === 'push') {
            let spanObj = document.createElement('span');
            spanObj.innerHTML = elt+"\n";
            resultDom.appendChild(spanObj);
        } 
        else if(operation === 'pop')
        {
            if(resultDom.lastChild) {
                resultDom.removeChild(resultDom.lastChild);
            }
            else {
                alert('Stack is empty...');
            }
        }
        else {
            if(resultDom.firstChild) {
                alert('The peek element of Stack is '+resultDom.lastChild.textContent);
                // resultDom.innerHTML = resultDom.firstChild.textContent;
            }
            else {
                alert('Stack is empty...');
            }
        }
    }
    
    function onQueue(operation) {
        //variable declaration
        let elt = document.getElementById('qdata').value;
        let resultDom = document.getElementById('result');

        if(elt === '') {
            alert("Please enter any value...");
            return;
        }

        //inserting element at the end of the queueArray
        if(operation === 'enque') {
            let spanObj = document.createElement('span');
            spanObj.innerHTML = elt+"\n";
            resultDom.appendChild(spanObj);
        } else 
        {
            if(resultDom.firstChild){
                resultDom.removeChild(resultDom.firstChild);
            }
            else {
                alert('Queue is empty...');
            }        
        }
    }