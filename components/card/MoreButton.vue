<template>
  <div class="bt more-bt">
    <span class="fl"></span><span class="sfl"></span><span class="cross"></span
    ><i></i>
    <p>En savoir plus</p>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.bt {
  width: 100%;
  min-width: 150px;
  cursor: pointer;
  position: relative;
  font-family: 'Roboto';
  text-transform: uppercase;
  color: Black;
  letter-spacing: 0.5px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  outline: none;
  text-decoration: none;
  text-align: center;
}

.more-bt {
  border-right: 2px solid Black;
  border-bottom: 2px solid Black;
  padding: 17px 29px 15px 31px;
  border-color: Black;
}

.more-bt p {
  font-size: 14px;
}

#wrapper.smooth section.smoothy.show {
  visibility: visible;
}

.more-bt:before {
  left: 0;
  bottom: 0;
  height: -webkit-calc(100% - 17px);
  height: calc(100% - 17px);
  width: 2px;
}

.more-bt:after,
.more-bt:before {
  content: ' ';
  display: block;
  background: Black;
  position: absolute;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  z-index: 10;
}

.more-bt:after {
  top: 0;
  right: 0;
  width: -webkit-calc(100% - 17px);
  width: calc(100% - 17px);
  height: 2px;
}

.more-bt:after,
.more-bt:before {
  content: ' ';
  display: block;
  background: Black;
  position: absolute;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  z-index: 10;
}

::selection {
  background: Black;
  color: #ffffff;
  text-shadow: none;
}

.more-bt:before {
  left: 0;
  bottom: 0;
  height: -webkit-calc(100% - 17px);
  height: calc(100% - 17px);
  width: 2px;
}

.more-bt:after,
.more-bt:before {
  content: ' ';
  display: block;
  background: Black;
  position: absolute;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  z-index: 10;
}

.more-bt .fl,
.more-bt .sfl {
  position: absolute;
  right: 0;
  height: 100%;
  width: 0;
  z-index: 2;
  background: Black;
  top: 0;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  -webkit-transition-delay: 0.1s;
  transition-delay: 0.1s;
}

.more-bt .fl,
.more-bt .sfl {
  position: absolute;
  right: 0;
  height: 100%;
  width: 0;
  z-index: 2;
  background: Black;
  top: 0;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  -webkit-transition-delay: 0.1s;
  transition-delay: 0.1s;
}

.more-bt .sfl {
  z-index: 1;
  background: #FF7B50;
  -webkit-transition: 0.7s;
  transition: 0.7s;
}

.more-bt .cross {
  position: absolute;
  z-index: 15;
  width: 18px;
  height: 18px;
  top: -webkit-calc(50% - 8px);
  top: calc(50% - 8px);
  left: -webkit-calc(50% - 8px);
  left: calc(50% - 8px);
}

#wrapper.smooth section.smoothy {
  visibility: hidden;
}

.more-bt .cross:before {
  width: 100%;
  height: 2px;
  top: 8px;
  left: 0px;
  -webkit-transform: translateX(50px) scaleX(0);
  -ms-transform: translateX(50px) scaleX(0);
  transform: translateX(50px) scaleX(0);
}

.more-bt .cross:before,
.more-bt .cross:after {
  content: ' ';
  background: #fff;
  display: block;
  position: absolute;
  opacity: 0;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
  -webkit-transition-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  transition-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
}

.more-bt .cross:after {
  width: 2px;
  height: 100%;
  left: 8px;
  top: 0;
  -webkit-transform: translateY(20px) scaleY(0);
  -ms-transform: translateY(20px) scaleY(0);
  transform: translateY(20px) scaleY(0);
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
}

.more-bt .cross:before,
.more-bt .cross:after {
  content: ' ';
  background: #fff;
  display: block;
  position: absolute;
  opacity: 0;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
  -webkit-transition-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  transition-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
}

.more-bt i {
  position: absolute;
  display: block;
  top: 1px;
  left: 1px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  z-index: 10;
}

.more-bt i:before {
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
}

.more-bt i:after,
.more-bt i:before {
  content: ' ';
  display: block;
  width: 2px;
  height: 20px;
  background: Black;
  position: absolute;
  margin: -10px -1px;
  left: 50%;
  top: 50%;
  transition: 0.3s;
}

.more-bt:hover i:after {
  content: ' ';
  display: block;
  width: 2px;
  height: 20px;
  background: Black;
  position: absolute;
  margin: 0px -1px;
  left: 50%;
  top: 50%;
}

.more-bt:hover i:before {
  content: ' ';
  display: block;
  width: 2px;
  height: 20px;
  background: Black;
  position: absolute;
  margin: -10px 0px -10px 8px;
  left: 50%;
  top: 50%;
}

.more-bt p {
  -webkit-transition: 0.5s;
  transition: 0.5s;
  position: relative;
  z-index: 1;
}

.more-bt:hover:before,
.more-bt:before {
  height: 100%;
}

.more-bt:before {
  left: 0;
  bottom: 0;
  height: -webkit-calc(100% - 17px);
  height: calc(100% - 17px);
  width: 2px;
}

.more-bt:hover .fl,
.more-bt .fl {
  -webkit-transition: 0.7s;
  transition: 0.7s;
}

.more-bt:hover .fl,
.more-bt:hover .sfl,
.more-bt .fl,
.more-bt .sfl {
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
  width: 100%;
}

.more-bt .fl,
.more-bt .sfl {
  position: absolute;
  right: 0;
  height: 100%;
  width: 0;
  z-index: 2;
  background: Black;
  top: 0;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  -webkit-transition-delay: 0.1s;
  transition-delay: 0.1s;
}

.more-bt:hover .sfl,
.more-bt .sfl {
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.more-bt:hover .fl,
.more-bt:hover .sfl,
.more-bt.hvd .fl,
.more-bt.hvd .sfl {
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
  width: 100%;
}

.more-bt .sfl {
  z-index: 1;
  background: #FF7B50;
  -webkit-transition: 0.7s;
  transition: 0.7s;
}

.more-bt .cross {
  position: absolute;
  z-index: 15;
  width: 18px;
  height: 18px;
  top: -webkit-calc(50% - 8px);
  top: calc(50% - 8px);
  left: -webkit-calc(50% - 8px);
  left: calc(50% - 8px);
}

.more-bt:hover .cross:before,
.more-bt .cross:before {
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
}

.more-bt:hover .cross:after,
.more-bt:hover .cross:before,
.more-bt .cross:after,
.more-bt .cross:before {
  -webkit-transform: none;
  -ms-transform: none;
  transform: none;
  opacity: 1;
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
}

.more-bt .cross:after {
  width: 2px;
  height: 100%;
  left: 8px;
  top: 0;
  -webkit-transform: translateY(20px) scaleY(0);
  -ms-transform: translateY(20px) scaleY(0);
  transform: translateY(20px) scaleY(0);
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
}

.more-bt .cross:before,
.more-bt .cross:after {
  content: ' ';
  background: #fff;
  display: block;
  position: absolute;
  opacity: 0;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
  -webkit-transition-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  transition-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
}

.more-bt:hover .cross:after,
.more-bt:hover .cross:before,
.more-bt.hvd .cross:after,
.more-bt.hvd .cross:before {
  -webkit-transform: none;
  -ms-transform: none;
  transform: none;
  opacity: 1;
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
}

.more-bt:hover .cross:after,
.more-bt.hvd .cross:after {
  -webkit-transition-duration: 0.6s;
  transition-duration: 0.6s;
}
</style>
