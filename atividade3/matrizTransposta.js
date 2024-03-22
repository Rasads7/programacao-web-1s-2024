function transporMatriz(A) {
    console.log("Matriz original:");
    for (let i = 0; i < A.length; i++) {
        console.log(A[i]);
    }

    console.log("Matriz transposta:");
    for (let i = 0; i < A[0].length; i++) {
        let transposta = [];
        for (let j = 0; j < A.length; j++) {
            transposta.push(A[j][i]);
        }
        console.log(transposta);
    }
}

let matrizOriginal = [[1, 2, 3], [4, 5, 6]];
transporMatriz(matrizOriginal);
