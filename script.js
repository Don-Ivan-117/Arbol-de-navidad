function mostrar(){
    for (let i = 0; i < 10; i++) {
        if (i === 0) {
            console.log(" ".repeat(9) + "*");
        } else {
            console.log(" ".repeat(10 - i) + "0".repeat(i * 2 - 1));
        }
    }
}

mostrar();
