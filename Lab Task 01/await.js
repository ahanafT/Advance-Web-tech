const abs = async() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("i am ahanaf");
        }, 1000);
    });
};

const Data = async () => {
    console.log("hello aiub");
    const result = await abs();
    console.log(result); 
}
Data()