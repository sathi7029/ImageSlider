var photos=["1.jpg","2.jpg","3.jpg","4.jpg"," 5.jpg","6.jpg"];


var count=0;
function next()
{
    count++;
    if(count>=photos.length)
    {
        count=0;
        document.querySelector("#ig").src=photos[count];
    }else{
        document.querySelector("#ig").src=photos[count];
    }
}
function prev(){
    count--;
    if(count< 0)
    {
        count=photos.length-1;
        document.querySelector("#ig").src=photos[count];
    }else{
        document.querySelector("#ig").src=photos[count];
    }
}
