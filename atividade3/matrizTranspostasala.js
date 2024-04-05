function transporMatriz(A){
    let mOriginal = "";
    for(let i = 0; i < A.lenght; i++){
        for(let j = 0; j < A[0].lenght; j++){
            mOriginal += A[i][j] + ' ';
        }
        mOriginal +='\n';
    }
    console.log(mOriginal);

    let mtransposta = "";
    for(let j = 0; j < A[0].lenght; j++){
        for(let i = 0; i < A.lenght; i++){
            mtransposta += A[i][j] + '';
        }
        mtransposta += "\n";
    }
    console.log(mtransposta);
}

const A = [
    [1,2],
    [3,4],
    [5,6],
];

transporMatriz(A);