class Jumbleword{
    constructor(){
       this.access1 = createInput("Code1")
        this.access1.position(100,90);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Check');
        this.button1.position(100,120);
        this.button1.style('background', 'lightgrey');    

        this.access2 = createInput("Code1")
        this.access2.position(700,190);
        this.access2.style('background', 'white');  

        this.button2 = createButton('Check');
        this.button2.position(700,220);
        this.button2.style('background', 'lightgrey');

        this.access3 = createInput("Code1")
        this.access3.position(100,290);
        this.access3.style('background', 'white');  

        this.button3 = createButton('Check');
        this.button3.position(100,320);
        this.button3.style('background', 'lightgrey');

        this.access4 = createInput("Code1")
        this.access4.position(700,390);
        this.access4.style('background', 'white');

        this.button4 = createButton('Check');
        this.button4.position(700,420);
        this.button4.style('background', 'lightgrey');  
       
        this.access5 = createInput("Code1")
        this.access5.position(100,490);
        this.access5.style('background', 'white');

        this.button5 = createButton('Check');
        this.button5.position(100,520);
        this.button5.style('background', 'lightgrey');
       
        this.access6 = createInput("Code1")
        this.access6.position(1150,300);
        this.access6.style('background', 'white');

        this.button6 = createButton('Check');
        this.button6.position(1150,330);
        this.button6.style('background', 'lightgrey');  
    }
 async read(){
     await database.ref('/').once("value",(data)=>{
          info=data.val()
      })
     var temp = false;
  
for (let i = 1 ; i <= 6; i++) {
    while(temp!=true){
        var r=Math.round(random(1,12))
        if(arr.includes(r)!=true){
            arr.push(r);
            temp=true;
        }
    }
    temp=false;
}
 }  
 display(){
      fill("black")
    textSize(15)
    text(info[arr[0]]['j'], 100,50)
    fill('purple')
    textStyle( BOLD)
    text(info[arr[0]]['q'], 100,70)

    fill("black")
    textSize(15)
    text(info[arr[1]]['j'], 700,150)
    fill("purple")
    text(info[arr[1]]['q'], 700,170) 

    fill("black")
    textSize(15)
    text(info[arr[2]]['j'], 100,250)
    fill("purple")
    text(info[arr[2]]['q'], 100,270)

    fill("black")
    textSize(15)
    text(info[arr[3]]['j'], 700,350)
    fill("purple")
    text(info[arr[3]]['q'], 700,370)

    fill("black")
    textSize(15)
    text(info[arr[4]]['j'], 100,450)
    fill("purple")
    text(info[arr[4]]['q'], 100,470)

    fill("black")
    textSize(15)
    text(info[arr[5]]['j'], 1150,270)
    fill("purple")
    text(info[arr[5]]['q'], 1150,290)




this.button1.mousePressed(()=>{
    if( this.access1.value().toUpperCase()==info[arr[0]]['a'] ){
       
        score++
    }
})
this.button2.mousePressed(()=>{
    if( this.access2.value().toUpperCase()==info[arr[1]]['a'] ){
        score++
    }
})
this.button3.mousePressed(()=>{
    if( this.access3.value().toUpperCase()==info[arr[2]]['a'] ){
       score++ 
    }
})
this.button4.mousePressed(()=>{
    if( this.access4.value().toUpperCase()==info[arr[3]]['a'] ){
       score++ 
    }
})
this.button5.mousePressed(()=>{
    if( this.access5.value().toUpperCase()==info[arr[4]]['a'] ){
      score++ 
    }
})

this.button6.mousePressed(()=>{
    if( this.access6.value().toUpperCase()==info[arr[5]]['a'] ){
      score++ 
    }
})
textSize(30)
text('Score: '+score,1350/2,50)
 }  
 hide(){
     this.access1.hide()
     this.button1.hide()

     this.access2.hide()
     this.button2.hide()

     this.access3.hide()
     this.button3.hide()

     this.access4.hide()
     this.button4.hide()

     this.access5.hide()
     this.button5.hide()

     this.access6.hide()
     this.button6.hide()
} 
}