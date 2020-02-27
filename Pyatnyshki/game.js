
let phool = document.getElementById('work_phool');
let calc_x=1;
let calc_y=0;
let game_strted = false;
let game_s_btn = document.getElementById('start');
let clock = document.getElementById('clock');
let game_stop_btn = document.getElementById('stop');
let mix_btn = document.getElementById('mix');
let sec=0;
let min=0;
let count = 0;
let = array_win = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
let = array_x = [520,660,800,940,520,660,800,940,520,660,800,940,520,660,800,940]
let = array_y = [150,150,150,150,290,290,290,290,430,430,430,430,570,570,570,570]
let x=[],y=[];
function mix()
{
    
    x = array_x;
    y = array_y;
    cars = array_win;
    for (let i=0;i<=8;i++)
    {let sorter = Math.floor(Math.random() * (15 - 0));
        let x_chan = x[sorter];
        let y_chan = y[sorter];
        let cars_chan = cars[sorter];
        x.splice(sorter,1,x[i])
        x[i] = x_chan;
        y.splice(sorter,1,y[i])
        y[i] = y_chan;
        cars.splice(sorter,1,cars[i])
        cars[i] = cars_chan;
        console.log(cars +' char');
        console.log(x +' x');
        console.log(y +' y');
        
    }
    for (let i=0;i!=16;i++)
    
    {
        
        phool.children[i].style.left = x[i]+'px';
        phool.children[i].style.top = y[i]+'px';
        phool.children[i].innerHTML = '<p>'+cars[i]+'</p>';
        
    }
    x=[];
    y=[];
    sorter =0;
    count = 0;
    counter.lastElementChild.innerHTML = count;
    sec=0;
    min=0;
    clock.lastElementChild.innerHTML="0:00"
}
mix_btn.addEventListener('click',function()
{
    mix();
})
function clock_game()
{
    if (game_strted == true)
    {  
        
        sec++
        if(sec == 59)
        {
            min++;
            sec=0;
        }
            if (sec < 10)
            {
                clock.lastElementChild.innerHTML = min +":0"+ sec;
            }
            else if (sec > 10)
            {
                
                clock.lastElementChild.innerHTML = min +":"+ sec;
            }
            
        
    }
    
    
}
game_stop_btn.addEventListener('click',function()
{
    game_strted = false;
   
});

game_s_btn.addEventListener('click',function()
{
    game_strted = true;
   if (game_strted == true)
   {
    let foo = setInterval(clock_game,1000);
    
   }
   else
   {
    clearInterval(foo);
   }

})
for (let i = 1; i <= 16; i++)
{
    let div = document.createElement('div');
    
    
    if ( i != 16)
    {
    div.setAttribute('class' ,'pyatnashik');
    div.setAttribute('id' ,'p' + i);
    div.innerHTML = "<p>" + i + "</p>";
    div.setAttribute('onclick' ,'type_on_pyat(p'+ 1 +')');
    }
    else{
        div.setAttribute('id' ,'empty');
        div.setAttribute('style' ,'display: none;');
        div.innerHTML = "<p>" + i + "</p>";
        div.setAttribute('class' ,'pyatnashik');
    }
    if (calc_x > 4)
    {
        calc_x = 1;
        calc_y++;
        div.style.left = 380  + 140 * calc_x + 'px';
        div.style.top = 150 + 140 * calc_y + 'px';
        
        
    }
    else
    {
        div.style.left = 380 + 140 * calc_x + 'px';
        div.style.top = 150 + 140 * calc_y + 'px';
    }
        phool.append(div);
        calc_x++;
    
    
    
}
let empty_cage = document.getElementById("empty");
let counter = document.getElementById("counter");
let f=0;
let x_n,y_n,x_e,y_e;
function is_game_win()
{

    for(let i=1; i<=16;i++)
    {
       
       let one = parseInt(phool.childNodes[i].lastElementChild.textContent);
       let two =parseInt(phool.childNodes[i].style.left);
       let three =parseInt(phool.childNodes[i].style.top);

       
       if ((one == array_win[i-1]) && (two == array_x[i-1]) && (three == array_y[i-1]))
       {
           f++;
           if(f==16)
           {
               alert('Победа');
               game_strted = false;
           }
       }
    }
    f =0;
   
   
}
function type_on_pyat()
{
    onclick = function(el)
    {
        if (game_strted == true){
        
        let new_cage = el.target;
         x_n = new_cage.style.left;
         y_n = new_cage.style.top;
            x_n = parseInt( x_n.replace('px',''));
             y_n = parseInt(y_n.replace('px',''));
         x_e = empty_cage.style.left;
         y_e = empty_cage.style.top;
             x_e = parseInt(x_e.replace('px',''));
             y_e = parseInt(y_e.replace('px',''));

        
        if (((y_n + 140 == y_e || y_n - 140 == y_e) && x_n == x_e) || ((x_n + 140 == x_e || x_n - 140 == x_e))&& y_n == y_e)
        {
           
           
            empty_cage.style.left = x_n + 'px';
            empty_cage.style.top = y_n + 'px';
            new_cage.style.left = x_e + 'px';
             new_cage.style.top = y_e +'px';
             counter.lastElementChild.innerHTML = ++count;
                is_game_win();
        
        }
        
    };
    }
}
    





 