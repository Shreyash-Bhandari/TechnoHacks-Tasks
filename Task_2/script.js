document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('inputBox');
    const buttons = document.querySelectorAll('button');

    let expression = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            switch (value) {
                case 'AC':
                    expression = '';
                    break;
                case 'DEL':
                    expression = expression.slice(0, -1);
                    break;
                case '=':
                    try {
                        expression = eval(expression);
                        if (isNaN(expression) || !isFinite(expression)) {
                            throw new Error('Invalid expression');
                        }
                    } catch (error) {
                        expression = 'Error';
                    }
                    break;
                default:
                    expression += value;
            }

            input.value = expression;
        });
    });
});

