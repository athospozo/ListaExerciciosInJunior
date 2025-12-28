//definição de variaveis:
let a, b, c;
let discriminante;
let x1, x2;

//coleta de valores:
a = Number(prompt ("Digite o valor de A:"));
b = Number(prompt ("Digite o valor de B:"));
c = Number(prompt ("Digite o valor de C"));

//calculo do discriminante:
discriminante = b*b - 4*a*c

//caso existam raizes reais:
if (discriminante >= 0){
    x1 = (-b + Math.sqrt(discriminante))/(2*a);
    x2 = (-b - Math.sqrt(discriminante))/(2*a);
    if (discriminante == 0)
        console.log (`A raiz é dupla e é ${x1}.`);
    else
        console.log (`As raizes sao x1 = ${x1}, e x2 = ${x2}.`)
}

//caso nao existam raizes reais:
else
    console.log ("A equação não possui raízes reais.")