module.exports = {figuresToRussianText};

function figuresToRussianText(number) {
    const rublesText = ["рубль", "рубля", "рублей"];
    const anotherFiguresText = ["одна", "две"];
    const thousandText = ["тысяч", "тысяча", "тысячи"];
    const millionsFigure = ["миллион", "миллиона", "миллионов"];
    let thousandTextRubles = "тысяч";
    let millionsText = "";
    let thisIsThousand = false;
    let rublesVar = "";
    let thisIsMillion = false;

    const oneFigureNumber = (str, thisIsThousand, thisIsMillion) => {
        switch (str) {
            case ("1"):
                if (thisIsThousand) {
                    rublesVar = "";
                    thisIsThousand = false;
                    return `${anotherFiguresText[0]} ${thousandText[1]}`;
                } else if (thisIsMillion) {
                    millionsText = millionsFigure[0];
                    return `один `
                } else {
                    rublesVar = rublesText[0];
                    return `один `;
                }
            case ("2"):
                if (thisIsThousand) {
                    rublesVar = "";
                    thisIsThousand = false;
                    thousandTextRubles = thousandText[2];
                    return `${anotherFiguresText[1]} ${thousandTextRubles}`;
                } else if (thisIsMillion) {
                    rublesVar = millionsFigure[1];
                    return `два `
                } else {
                    rublesVar = rublesText[1];
                    return `два `;
                }
            case ("3"):
                if (thisIsThousand) {
                    rublesVar = "";
                    thisIsThousand = false;
                    return `три ${thousandText[2]}`
                } else if (thisIsMillion) {
                    rublesVar = millionsFigure[1];
                    return `три `
                } else {
                    rublesVar = rublesText[1];
                    return `три `;
                }
            case ("4"):
                if (thisIsThousand) {
                    rublesVar = "";
                    thisIsThousand = false;
                    return `четыре ${thousandText[2]}`;
                } else if (thisIsMillion) {
                    rublesVar = millionsFigure[1];
                    return `четыре `
                } else {
                    rublesVar = rublesText[1];
                    return `четыре `;
                }
            case ("5"):
                if (thisIsThousand) {
                    rublesVar = "";
                    thisIsThousand = false;
                    thousandTextRubles = thousandText[0];
                    return `пять ${thousandTextRubles}`;
                } else if (thisIsMillion) {
                    rublesVar = millionsFigure[2];
                    return `пять `
                } else {
                    rublesVar = rublesText[2];
                    return `пять `;
                }
            case ("6"):
                if (thisIsThousand) {
                    rublesVar = "";
                    thisIsThousand = false;
                    thousandTextRubles = thousandText[0];
                    return `шесть ${thousandTextRubles}`;
                } else if (thisIsMillion) {
                    millionsText = millionsFigure[2];
                    return `шесть `
                } else {
                    rublesVar = rublesText[2];
                    return `шесть `;
                }
            case ("7"):
                if (thisIsThousand) {
                    rublesVar = "";
                    thisIsThousand = false;
                    thousandTextRubles = thousandText[0];
                    return `семь ${thousandTextRubles}`;
                } else if (thisIsMillion) {
                    rublesVar = millionsFigure[2];
                    return `семь `
                } else {
                    rublesVar = rublesText[2];
                    return `семь `;
                }
            case ("8"):
                if (thisIsThousand) {
                    rublesVar = "";
                    thisIsThousand = false;
                    thousandTextRubles = thousandText[0];
                    return `восемь ${thousandTextRubles}`;
                } else if (thisIsMillion) {
                    rublesVar = millionsFigure[2];
                    return `восемь `
                } else {
                    rublesVar = rublesText[2];
                    return `восемь `;
                }
            case ("9"):
                if (thisIsThousand) {
                    rublesVar = "";
                    thisIsThousand = false;
                    thousandTextRubles = thousandText[0];
                    return `девять ${thousandTextRubles}`;
                } else if (thisIsMillion) {
                    rublesVar = millionsFigure[2];
                    return `девять `
                } else {
                    rublesVar = rublesText[2];
                    return `девять `;
                }
        }
    };

    const decimalNumber = (str, thisIsThousand, thisIsMillion) => {
        switch (str) {
            case ("1"):
                if (thisIsThousand) {
                    thisIsThousand = false;
                    return `десять ${thousandText[0]} `
                } else if (thisIsMillion) {
                    millionsText = millionsFigure[2];
                    return `десять `;
                }  else {
                    rublesVar = rublesText[2];
                    return `десять `;
                }
            case ("2"):
                if (thisIsThousand) {
                    thisIsThousand = false;
                    return `двадцать ${thousandText[0]}`
                } else if (thisIsMillion) {
                    millionsText = millionsFigure[2];
                    return `двадцать `;
                }  else {
                    rublesVar = rublesText[2];
                    return `двадцать `;
                }
            case ("3"):
                if (thisIsThousand) {
                    thisIsThousand = false;
                    return `тридцать ${thousandText[0]}`
                } else if (thisIsMillion) {
                    millionsText = millionsFigure[2];
                    return `тридцать `;
                }  else {
                    rublesVar = rublesText[2];
                    return `тридцать `;
                }
            case ("4"):
                if (thisIsThousand) {
                    thisIsThousand = false;
                    return `сорок ${thousandText[0]}`
                } else if (thisIsMillion) {
                    millionsText = millionsFigure[2];
                    return `сорок `;
                }  else {
                    rublesVar = rublesText[2];
                    return `сорок `;
                }
            case ("5"):
                if (thisIsThousand) {
                    thisIsThousand = false;
                    return `пятьдесят ${thousandText[0]}`
                } else if (thisIsMillion) {
                    millionsText = millionsFigure[2];
                    return `пятьдесят `;
                }  else {
                    rublesVar = rublesText[2];
                    return `пятьдесят `;
                }
            case ("6"):
                if (thisIsThousand) {
                    thisIsThousand = false;
                    return `шестьдесят ${thousandText[0]}`
                } else if (thisIsMillion) {
                    millionsText = millionsFigure[2];
                    return `шестьдесят `;
                }  else {
                    rublesVar = rublesText[2];
                    return `шестьдесят `;
                }
            case ("7"):
                if (thisIsThousand) {
                    thisIsThousand = false;
                    return `семьдесят ${thousandText[0]}`
                } else if (thisIsMillion) {
                    millionsText = millionsFigure[2];
                    return `семьдесят `;
                }  else {
                    rublesVar = rublesText[2];
                    return `семьдесят `;
                }
            case ("8"):
                if (thisIsThousand) {
                    thisIsThousand = false;
                    return `восемьдесят ${thousandText[0]}`
                } else if (thisIsMillion) {
                    millionsText = millionsFigure[2];
                    return `восемьдесят `;
                }  else {
                    rublesVar = rublesText[2];
                    return `восемьдесят `;
                }
            case ("9"):
                if (thisIsThousand) {
                    thisIsThousand = false;
                    return `девяноста ${thousandText[0]}`
                } else if (thisIsMillion) {
                    millionsText = millionsFigure[2];
                    return `девяноста `;
                }  else {
                    rublesVar = rublesText[2];
                    return `девяноста `;
                }
        }
    };

    const from10to19Number = (str, thisIsThousand, thisIsMillion) => {
        switch (str) {
            case("11"):
                if (thisIsThousand) {
                    thisIsThousand = false;
                    return `одиннадцать ${thousandText[0]}`;
                } else if (thisIsMillion) {
                    millionsText = millionsFigure[2];
                    return `одиннадцать `;
                } else {
                    return `одиннадцать ${rublesText[2]}`;
                }
            case("12"):
                if (thisIsThousand) {
                    thisIsThousand = false;
                    return `двенадцать ${thousandText[0]}`;
                } else if (thisIsMillion) {
                    millionsText = millionsFigure[2];
                    return `двенадцать `;
                } else {
                    return `двенадцать ${rublesText[2]}`;
                }
            case("13"):
                if (thisIsThousand) {
                    thisIsThousand = false;
                    return `тринадцать ${thousandText[0]}`;
                } else if (thisIsMillion) {
                    millionsText = millionsFigure[2];
                    return `тринадцать `;
                } else {
                    return `тринадцать ${rublesText[2]}`;
                }
            case("14"):
                if (thisIsThousand) {
                    thisIsThousand = false;
                    return `четырнадцать ${thousandText[0]}`;
                } else if (thisIsMillion) {
                    millionsText = millionsFigure[2];
                    return `четырнадцать `;
                } else {
                    return `четырнадцать ${rublesText[2]}`;
                }
            case("15"):
                if (thisIsThousand) {
                    thisIsThousand = false;
                    return `пятнадцать ${thousandText[0]}`;
                } else if (thisIsMillion) {
                    millionsText = millionsFigure[2];
                    return `пятнадцать `;
                } else {
                    return `пятнадцать ${rublesText[2]}`;
                }
            case("16"):
                if (thisIsThousand) {
                    thisIsThousand = false;
                    return `шестьнадцать ${thousandText[0]}`;
                } else if (thisIsMillion) {
                    millionsText = millionsFigure[2];
                    return `шестьнадцать `;
                } else {
                    return `шестьнадцать ${rublesText[2]}`;
                }
            case("17"):
                if (thisIsThousand) {
                    thisIsThousand = false;
                    return `семнадцать ${thousandText[0]}`;
                } else if (thisIsMillion) {
                    millionsText = millionsFigure[2];
                    return `семнадцать `;
                } else {
                    return `семнадцать ${rublesText[2]}`;
                }
            case("18"):
                if (thisIsThousand) {
                    thisIsThousand = false;
                    return `восемьнадцать ${thousandText[0]}`;
                } else if (thisIsMillion) {
                    millionsText = millionsFigure[2];
                    return `восемьнадцать `;
                } else {
                    return `восемьнадцать ${rublesText[2]}`;
                }
            case("19"):
                if (thisIsThousand) {
                    thisIsThousand = false;
                    return `девятнадцать ${thousandText[0]}`;
                } else if (thisIsMillion) {
                    millionsText = millionsFigure[2];
                    return `девятнадцать `;
                } else {
                    return `девятнадцать ${rublesText[2]}`;
                }
        }
    };

    const from100to900Number = (str, thisIsThousand, thisIsMillion) => {
        switch (str) {
            case("1"):
                if (thisIsThousand) {
                    thisIsThousand = false;
                    rublesVar = "";
                    thousandTextRubles = thousandText[0];
                    return `сто ${thousandTextRubles}`;
                } else if (thisIsMillion) {
                    millionsText = millionsFigure[2];
                    return `сто `;
                } else {
                    rublesVar = rublesText[2];
                    return "сто";
                }
            case("2"):
                if (thisIsThousand) {
                    thisIsThousand = false;
                    rublesVar = "";
                    thousandTextRubles = thousandText[0];
                    return `двести ${thousandTextRubles}`;
                } else if (thisIsMillion) {
                    millionsText = millionsFigure[2];
                    return `двести `;
                } else {
                    rublesVar = rublesText[2];
                    return "двести";
                }
            case("3"):
                if (thisIsThousand) {
                    thisIsThousand = false;
                    rublesVar = "";
                    thousandTextRubles = thousandText[0];
                    return `триста ${thousandTextRubles}`;
                } else if (thisIsMillion) {
                    millionsText = millionsFigure[2];
                    return `триста `;
                } else {
                    rublesVar = rublesText[2];
                    return "триста";
                }
            case("4"):
                if (thisIsThousand) {
                    thisIsThousand = false;
                    rublesVar = "";
                    thousandTextRubles = thousandText[0];
                    return `четыреста ${thousandTextRubles}`;
                } else if (thisIsMillion) {
                    millionsText = millionsFigure[2];
                    return `четыреста `;
                } else {
                    rublesVar = rublesText[2];
                    return "четыреста";
                }
            case("5"):
                if (thisIsThousand) {
                    thisIsThousand = false;
                    rublesVar = "";
                    thousandTextRubles = thousandText[0];
                    return `пятьсот ${thousandTextRubles}`;
                } else if (thisIsMillion) {
                    millionsText = millionsFigure[2];
                    return `пятьсот `;
                } else {
                    rublesVar = rublesText[2];
                    return "пятьсот";
                }
            case("6"):
                if (thisIsThousand) {
                    thisIsThousand = false;
                    rublesVar = "";
                    thousandTextRubles = thousandText[0];
                    return `шестьсот ${thousandTextRubles}`;
                } else if (thisIsMillion) {
                    millionsText = millionsFigure[2];
                    return `шестьсот `;
                } else {
                    rublesVar = rublesText[2];
                    return "шестьсот";
                }
            case("7"):
                if (thisIsThousand) {
                    thisIsThousand = false;
                    rublesVar = "";
                    thousandTextRubles = thousandText[0];
                    return `семьсот ${thousandTextRubles}`;
                } else if (thisIsMillion) {
                    millionsText = millionsFigure[2];
                    return `семьсот `;
                } else {
                    rublesVar = rublesText[2];
                    return "семьсот";
                }
            case("8"):
                if (thisIsThousand) {
                    thisIsThousand = false;
                    rublesVar = "";
                    thousandTextRubles = thousandText[0];
                    return `восемьсот ${thousandTextRubles}`;
                } else if (thisIsMillion) {
                    millionsText = millionsFigure[2];
                    return `восемьсот `;
                } else {
                    rublesVar = rublesText[2];
                    return "восемьсот";
                }
            case("9"):
                if (thisIsThousand) {
                    thisIsThousand = false;
                    rublesVar = "";
                    thousandTextRubles = thousandText[0];
                    return `девятьсот ${thousandTextRubles}`;
                } else if (thisIsMillion) {
                    millionsText = millionsFigure[2];
                    return `девятьсот `;
                } else {
                    rublesVar = rublesText[2];
                    return "девятьсот";
                }
        }
    };

    let integerNumber = Math.trunc(number);
    let fractionalNumber = (number - integerNumber).toFixed(2).split(".").splice(1, 1).join("");
    let message = "";
    let finalMessage = "";

    const oneFigureNumberCalc = (num, thisIsThousand, thisIsMillion) => {
        return `${oneFigureNumber(num, thisIsThousand, thisIsMillion)} ${rublesVar}`;
    };

    const decimalFigureChecking = (figure, thisIsThousand, thisIsMillion) => {
        if (figure === 0) {
            return ` ${rublesText[2]}`;
        } else {
            if (figure % 10 === 0 || figure === 10) {
                return `${decimalNumber(figure.toString().slice(0, 1), thisIsThousand, thisIsMillion)} ${rublesVar}`;
            } else if (figure > 10 && figure < 20) {
                return `${from10to19Number(figure.toString(), thisIsThousand, thisIsMillion)}`;
            } else {
                let firstFigure = figure.toString().slice(0, 1);
                let secondFigure = figure.toString().slice(1, 2);

                if (+firstFigure === 0) {
                    return `${oneFigureNumber(secondFigure, thisIsThousand)} ${rublesVar}`;
                } else {
                    return `${decimalNumber(firstFigure)} ${oneFigureNumber(secondFigure, thisIsThousand, thisIsMillion)} ${rublesVar}`;
                }
            }
        }
    };

    const hundredFigureChecking = (num, thisIsThousand, thisIsMillion) => {
        if (num === 0) {
            return ``;
        } else {
            if (num % 100 === 0) {
                return `${from100to900Number(num.toString().slice(0, 1), thisIsThousand, thisIsMillion)} ${rublesVar}`;
            } else {
                let firstFigure = num.toString().slice(0, 1);
                let secondFigure = num.toString().slice(1, 3);
                return `${from100to900Number(firstFigure)} ${decimalFigureChecking(secondFigure, thisIsThousand, thisIsMillion)} `;
            }
        }
    };

    const thousandsFigureChecking = (figure, thisIsThousand) => {
        let thousand = Math.trunc(figure / 1000);
        let hundred = Math.trunc( figure - thousand * 1000);
        thisIsThousand = true;

        if (+hundred === 0) {
            return `${figuresChecking(thousand, thisIsThousand)}  ${figuresChecking(hundred)}  ${rublesText[2]}`
        } else {
            return `${figuresChecking(thousand, thisIsThousand)}  ${figuresChecking(hundred)}  `
        }
    };

    const millionFigureChecking = (figure) => {
        let million = Math.trunc(figure / 1000000);
        let thousand = Math.trunc( figure - million * 1000000);
        let thisIsMillion = true;

        return `${figuresChecking(million, null ,thisIsMillion)} ${millionsText} ${thousandsFigureChecking(thousand)}`
    };

    const billionFigureChecking = (figure) => {
        let billion = Math.trunc(figure / 1000000000);
        let millions = Math.trunc( figure - billion * 1000000000);
        return `${figuresChecking(billion)} миллиарда ${millionFigureChecking(millions)}`;
    };

    const figuresChecking = (integerNumber, thisIsThousand, thisIsMillion) => {
        if (integerNumber === 0) {
            return ``;
            } else if (integerNumber < 10) {
                return message = `${oneFigureNumberCalc(integerNumber.toString(), thisIsThousand, thisIsMillion)}`;
            } else if (integerNumber >= 10 && integerNumber < 100) {
                return message = `${decimalFigureChecking(integerNumber, thisIsThousand, thisIsMillion)}`;
            } else if (integerNumber >= 100 && integerNumber < 1000) {
                return message = `${hundredFigureChecking(integerNumber, thisIsThousand, thisIsMillion)} `;
            } else if (integerNumber >= 1000 && integerNumber < 1000000) {
                return message = `${thousandsFigureChecking(integerNumber)} `;
            } else if (integerNumber >= 1000000 && integerNumber < 1000000000) {
                return message = `${millionFigureChecking(integerNumber)}`;
            } else if (integerNumber >= 1000000000 && integerNumber < 1000000000000) {
                return message = `${billionFigureChecking(integerNumber)}`;
            } else {
                return message = "LOL";
            }
    };

    figuresChecking(integerNumber);

    finalMessage = `${message} ${decimalFigureChecking(fractionalNumber)
        .replace(/ рублей+/g, ' ')
        .replace(/тысяч+/g, ' ')
        .replace(/рубль+/g, ' ')
        .replace(/рубля+/g, ' ')
    } копеек`;
    return finalMessage.replace(/ +/g, ' ').trim();
}
