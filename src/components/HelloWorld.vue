<template>
  <div class="contentMaster">
    <div>
      <div class="detalleUsuario">
        <img alt="Avatar" src="../assets/images/user-info.png" class="avatar">
        <h1>JULIA RUSU</h1>
        <h3><img src="../assets/images/level-icon.png" class="levelGold">LEVEL: GOLD</h3>
        <article class="idioma">
          <img src="../assets/images/language.png" class="icoIdioma">
          <span class="idiomaActivo"><button type="button" v-on:click="setLenguaje('en')">E</button></span>
          <span><button type="button" v-on:click="setLenguaje('es')">ES</button></span>
        </article>
        <article class="hora" id="clock">
          <h1>{{ time }}</h1>
          <span>{{ date }}</span>
          <!--span>Monday, 4 Jan</span-->
          <p>{{ $t("message.hello") }}</p>
        </article>

        <div class="followUs">
          <!--p>FOLLOW US</p-->
          <p>{{ $t("follow") }}</p>
          <img src="../assets/images/facebook.svg" class="redesSociales">
          <img src="../assets/images/instagram.svg" class="redesSociales">
          <img src="../assets/images/twitter.svg" class="redesSociales">
        </div>
      </div>
    </div>

    <div class="columnDos">
      <img alt="Volindo logo" src="../assets/images/logo.png" class="logo">
      <div class="columnasMin">
        <div class="animate__animated animate__bounce">
          <article class="circuloIco">
            <div>
              <img src="../assets/images/book.svg" class="redesSociales">
              <p>BOOK</p>
            </div>
          </article>
        </div>
        <div class="marginAuto">
          <article class="circuloIco">
            <div>
              <img src="../assets/images/clients.svg" class="redesSociales">
              <p>CLIENTS</p>
            </div>
          </article>
        </div>
        <div>
          <article class="circuloIco">
            <div>
              <img src="../assets/images/calendar.svg" class="redesSociales">
              <p>MANAGER RESERVATION</p>
            </div>
          </article>
        </div>
        <div>
          <article class="circuloIco">
            <div>
              <img src="../assets/images/myprofile.svg" class="redesSociales">
              <p>MY PROFILE</p>
            </div>
          </article>
        </div>
        <div>
          <article class="circuloIco">
            <div>
              <img src="../assets/images/personalize.svg" class="redesSociales">
              <p>PERSONALIZE</p>
            </div>
          </article>
        </div>
        <div>
          <article class="circuloIco">
            <div>
              <img src="../assets/images/support.svg" class="redesSociales">
              <p>SUPPORT</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-i18n/dist/vue-i18n.js"></script>
<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      time: '',
      date: '',
      dia: ['DOMINGO', 'LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES', 'SABADO'],
      week: ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'],
      mes: ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'],
      month: ['JUNUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'],
      timerID: null,
      selectIdiom: ''
    }
  },
  beforeMount() {
    if(localStorage.idiom){
      switch (localStorage.idiom) {
        case "en":
          this.$i18n.locale = "en"
          break;
        case "es":
          this.$i18n.locale = "es"
          break;
        default:
          break;
      }
      
    }
    this.timerID = setInterval(this.updateTime, 1000);
  },
  methods: {
    
    updateTime() {
      let cd = new Date();

      this.time = this.zeroPadding(cd.getHours(), 2) + ':' + this.zeroPadding(cd.getMinutes(), 2);

      if(localStorage.idiom == 'es'){
        this.date = this.dia[cd.getDay()] + ', ' + cd.getDate() + ' ' + this.mes[cd.getMonth()] ;
      } else {
        this.date = this.week[cd.getDay()] + ', ' + cd.getDate() + ' ' + this.month[cd.getMonth()] ;
      }
      
    },
    zeroPadding(num, digit){
        var zero = '';
        for(var i = 0; i < digit; i++) {
            zero += '0';
        }
        return (zero + num).slice(-digit);
    },
    setLenguaje(val){
      console.log(val)
      this.$i18n.locale = val
      localStorage.idiom = val
    },
  },

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
*{
  margin:0px;
  padding: 0px;
}
.contentMaster{
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  z-index:3;
  position: absolute;
}
.detalleUsuario {
  width: 70%;
  height: 100vh;
  margin: auto;
  background-image: linear-gradient(to bottom, rgba(227, 203, 123, .5), rgba(227, 203, 123, 0));
  color: #fff;
  display: grid;
  & .avatar {
    width: 30%;
    margin: auto;
    padding-top: 5em;
    margin-bottom: .5em;
  }
  & h1 {
    letter-spacing: 2px;
    font-size: 30px;
    font-weight: 400;
  }
  & h3 {
    letter-spacing: 2px;
    font-size: 20px;
    font-weight: 500;
  }
  & .levelGold {
    width: 23px;
    padding-right: 5px;
    vertical-align: middle;
  }
  & .idioma {
    margin: 2em auto;
    & .icoIdioma {
      vertical-align: middle;
    }
    & span{
      padding: .2em .8em;
    }
    & .idiomaActivo {
        color: #E3CB7B;
        font-weight: 500;
      }
  }
  .hora{
    & h1 {
      font-weight: 900;
      font-size: 64px;
      letter-spacing: 2px;
      display: block;
    }
    & span{
      font-size: 24px;
      letter-spacing: 1px;
      font-size: 400;
    }
  }
  .followUs {
    color: #E3CB7B;
    font-weight: 700;
    font-size: 12px;
    & .redesSociales {
      width: 25px;
      margin-right: .7em;
      margin-top: .5em
    }
  }
}

.columnDos {
  display: grid;
  & .logo{
    margin: 3em auto;
  }
}
.columnasMin {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  text-align: center;
  margin: auto;
  & div{
    margin: auto;
  }
  & .circuloIco {
    width: 140px;
    height: 140px; 
    margin-top: 3em;
    background-image: url('../assets/images/circulo.png');
    background-size: 100% 100%;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #E3CB7B;
    font-size: 11px;
    letter-spacing: 2px;
    & :hover {
      animation: bounce;
      background-color: gray;
    }
  }
}

@media (max-width: 768px) {
  .contentMaster{
    width: 100%;
    min-height: 100%;
    display: grid;
    position: absolute;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    z-index:2;
    background-color: rgba(0,0,0,.7);
  }
  .columnasMin {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    text-align: center;
    margin: auto;
  }
}
</style>
