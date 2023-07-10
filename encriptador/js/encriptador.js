export class Encriptador{

  constructor(llave,aEncriptar){
      this.llaves=llave;
      this.aEncriptar=aEncriptar;
  }
  
  encriptarinfo(){
      const llaves=this.llaves;
      var aEncriptar=this.aEncriptar; 
      aEncriptar = this.aEncriptar.toLowerCase();
      for(let i = 0; i < llaves.length; i++){
        if(aEncriptar.includes(this.llaves[i][0])){
          aEncriptar = aEncriptar.replaceAll(llaves[i][0], llaves[i][1]);
        }
      }
      return aEncriptar;
  }

  
}

export default Encriptador