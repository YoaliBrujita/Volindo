<template>
  <div class="contentMaster">
    <div>
    <div class="logOut">
      <p><img src="../assets/images/logout.svg" class="icoLog" v-show="!show" > {{ $t("message.logout") }}</p>
    </div>
    <div class="menuMovil"> 
      <button @click="show = !show" class="btnMenu"><img src="../assets/images/menu-icon.png"> </button>
    </div>
    <img alt="Volindo logo" src="../assets/images/logo.png" class="logoMov" v-show="!show">
      <div class="detalleUsuario" v-show="!show" >
        <img alt="Avatar" src="../assets/images/user-info.png" class="avatar">
        <h1>JULIA RUSU</h1>
        <h3><img src="../assets/images/level-icon.png" class="levelGold">{{ $t("message.level") }}</h3>
        <article class="idioma">
          <img src="../assets/images/language.png" class="icoIdioma">
          <span><button type="button" v-on:click="setLenguaje('en')" class="idiomaActivo">EN</button></span>
          <span><button type="button" v-on:click="setLenguaje('es')">ES</button></span>
        </article>
        <article class="hora" id="clock">
          <h1>{{ time }}</h1>
          <span>{{ date }}</span>
        </article>

        <div class="followUs">
          <p>{{ $t("message.follow") }}</p>
          <img src="../assets/images/facebook.svg" class="redesSociales">
          <img src="../assets/images/instagram.svg" class="redesSociales">
          <img src="../assets/images/twitter.svg" class="redesSociales">
        </div>
      </div>
    </div>

    <div class="columnDos ocultarMov">
      <img alt="Volindo logo" src="../assets/images/logo.png" class="logo">
      <div class="columnasMin">
        <div class="efectoHover">
          <article class="circuloIco">
            <div>
              <img src="../assets/images/book.svg" class="redesSociales">
              <p>{{ $t("message.book") }}</p>
            </div>
          </article>
        </div>
        <div class="marginAuto">
          <article class="circuloIco">
            <div>
              <img src="../assets/images/clients.svg" class="redesSociales">
              <p>{{ $t("message.clients") }}</p>
            </div>
          </article>
        </div>
        <div>
          <article class="circuloIco">
            <div>
              <img src="../assets/images/calendar.svg" class="redesSociales">
              <p>{{ $t("message.manager") }}</p>
            </div>
          </article>
        </div>
        <div>
          <article class="circuloIco">
            <div>
              <img src="../assets/images/myprofile.svg" class="redesSociales">
              <p>{{ $t("message.profile") }}</p>
            </div>
          </article>
        </div>
        <div>
          <article class="circuloIco">
            <div>
              <img src="../assets/images/personalize.svg" class="redesSociales">
              <p>{{ $t("message.personalize") }}</p>
            </div>
          </article>
        </div>
        <div>
          <article class="circuloIco">
            <div>
              <img src="../assets/images/support.svg" class="redesSociales">
              <p>{{ $t("message.support") }}</p>
            </div>
          </article>
        </div>
      </div>
    </div>

    <div class="columnDos" v-show="show" style="display: none">
      <div class="columnasMin">
        <div class="">
          <article class="circuloIco">
            <div>
              <img src="../assets/images/book.svg" class="redesSociales">
              <p>{{ $t("message.book") }}</p>
            </div>
          </article>
        </div>
        <div class="marginAuto">
          <article class="circuloIco">
            <div>
              <img src="../assets/images/clients.svg" class="redesSociales">
              <p>{{ $t("message.clients") }}</p>
            </div>
          </article>
        </div>
        <div>
          <article class="circuloIco">
            <div>
              <img src="../assets/images/calendar.svg" class="redesSociales">
              <p>{{ $t("message.manager") }}</p>
            </div>
          </article>
        </div>
        <div>
          <article class="circuloIco">
            <div>
              <img src="../assets/images/myprofile.svg" class="redesSociales">
              <p>{{ $t("message.profile") }}</p>
            </div>
          </article>
        </div>
        <div>
          <article class="circuloIco">
            <div>
              <img src="../assets/images/personalize.svg" class="redesSociales">
              <p>{{ $t("message.personalize") }}</p>
            </div>
          </article>
        </div>
        <div>
          <article class="circuloIco">
            <div>
              <img src="../assets/images/support.svg" class="redesSociales">
              <p>{{ $t("message.support") }}</p>
            </div>
          </article>
        </div>
      </div>
    </div>

    <div class="footer">
      <a href="" class="linkFooter">PRIVACITY POLICITY</a> | 
      <a href="" class="linkFooter">TERMS AND CONDITIONS</a> | 
      <a href="" class="linkFooter">FAQS</a>
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
      dia: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
      week: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      mes: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jyl', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
      month: ['Jan', 'Feb', 'Mar', 'Aapr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      timerID: null,
      selectIdiom: '',
      show: false
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
.circuloIco:hover {
  display: block;
  cursor: pointer;
  -webkit-animation: pulse 1.5s infinite;
}

@-webkit-keyframes pulse {
  0% {
    -moz-transform: scale(0.9);
    -ms-transform: scale(0.9);
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
  70% {
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -webkit-transform: scale(1);
    transform: scale(1);
    box-shadow: 0 0 0 50px rgba(90, 153, 212, 0);
  }
  100% {
    -moz-transform: scale(0.9);
    -ms-transform: scale(0.9);
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
    box-shadow: 0 0 0 0 rgba(90, 153, 212, 0);
  }
}

.contentMaster{
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  z-index:3;
  position: absolute;
}
.logOut {
  position: fixed; 
  right: 3em;
  top: 1em;
  color: #fff;
  & .icoLog {
    vertical-align: middle;
    padding-right: .2em;
  }
}
.menuMovil, .logoMov {
  display: none;
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
    & span button{
      padding: .2em .8em;
      background-color: transparent;
      border: 0px;
      color: #fff;
      & .idiomaActivo {
        color: #E3CB7B;
        font-weight: 500;
      }
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
    &:hover {
      
    }
  }
}

.footer {
  color: #fff;
  font-size: 9px;
  text-align: right;
  width: 100%;
  & a {
    color: #fff;
    padding: .5em 2em;
    text-decoration: none;
  }
}

.pulse-button:hover {

  position: relative;
  width: 100px;
  height: 100px;
  border: none;
  box-shadow: 0 0 0 0 rgba(232, 76, 61, 0.7);
  border-radius: 50%;
  background-color: #e84c3d;
  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/173024/jonathanlarradet_copy.png);
  background-size:cover;
  background-repeat: no-repeat;
  cursor: pointer;
  -webkit-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  -moz-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  -ms-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
}
@media (max-width: 768px) {
  .logoMov {
    display: block;
    width: 40%; 
    margin: auto;
    padding-top: 1em;
  }
  .logo {
    display: none;
  }
  .contentMaster{
    width: 100%;
    min-height: 100%;
    display: grid;
    position: absolute;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    z-index:3;
  }
  .columnasMin {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    text-align: center;
    margin: auto;
  }
  .ocultarMov {
    display: none
  }
  .logOut {
    display: none;
  }
  .logo{
    position: absolute;
    top: -.5em;
    left: 50%;
    transform: translateX(-50%);
    width: 30%;
  }
  .detalleUsuario{
    margin-top: 5em;
    border-radius: 3em 3em 0;
    position: relative;
    width: 85%;
    display: block;
    & .avatar {
      padding-top: 0px;
      position: absolute;
      top: -2em;
      left: 50%;
      transform: translateX(-50%);
      width: 50%;
    }
    & h1 {
      padding-top: 5.5em;
    }
    & .hora h1 {
      padding-top: 0em;
    }
  }
  .followUs {
    margin-top: 2em;
  }
  .footer {
      order: 0;
      width: 100%;
      & a.linkFooter {
        display: block;
        width: 100%;
        padding: 8px 0px;
        text-align: center;
      }
  }
  .menuMovil {
    display: block;
    position: absolute;
    right: 1em;
    top: 1em;
    & button {
      border: 0px;
      background-color: transparent;
    }
  }
}

</style>
