function func(arr, num)
{
    arr=arr||[1,2,3,4,5];
    num=num||2;
    arr.forEach(element => {
        console.log(Number(element)*num);
    });
}
func();