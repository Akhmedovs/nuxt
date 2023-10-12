<template>
    <div class="div">
        <header>
            <div class="container">

                <div class="section-contact">
                    <div class="header-contact">
                        <ul>
                            <img src="../assets/img/svg/russia.svg" alt="">
                            <li><NuxtLink>О магазине </NuxtLink></li>
                            <li><NuxtLink>Условия доставки</NuxtLink></li>
                        </ul>
                        <NuxtLink to="+998905623422">+998 (99) <b>123 45 67</b></NuxtLink>
                    </div>
                </div>

                <div class="section-bar">
                    <NuxtLink>
                        <img src="../assets/img/svg/logo.svg" alt="">
                    </NuxtLink>
                    <button class="katalog" @click="catal = !catal">
                        <img src="../assets/img/svg/darhboard.svg" alt="">
                        <p>Каталог</p>
                    </button>
                    <div class="input">
                        <input type="text" placeholder="поиск товаров на сайте ">
                        <button>
                            <img src="../assets/img/svg/search.svg" alt="">
                            <p>Поиск</p>
                        </button>
                    </div>
                    
                    <transition>
                        <div class="katal" v-if="catal" >
                        <img @click="catal = !catal" src="@/assets/img/svg/close.svg" alt="" class="ex">
                        <div >
                            <div class="menu-wrapper" >
                                <div class="menu-items">
                                    <li class="menu-item" v-for="item in menu?.data" :key="item">
                                        <h2>{{ item.title }}
                                            <img src="@/assets/img/svg/arrowdown.svg" alt="" class="rotate">
                                        </h2>
                                        <ul class="sub-menu">
                                            <li v-for="smi in item.subCategories" :key="smi.id">
                                                <NuxtLink to="/">{{ smi.title }}</NuxtLink>
                                            </li>
                                        </ul>
                                    </li>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    </transition>

                    <ul>
                        <li><img src="../assets/img/svg/user.svg" alt="" class="user" @click="reg = !reg"></li>
                        <li><NuxtLink><img src="../assets/img/svg/Favorite.svg" alt=""></NuxtLink></li>
                        <li><NuxtLink><img src="../assets/img/svg/balance.svg" alt=""></NuxtLink></li>
                        <li><NuxtLink><img src="../assets/img/svg/bag_alt.svg" alt=""></NuxtLink></li>
                    </ul>
                    <transition>
                        <div class="isregist" v-if="reg" >
                        <button @click="isRegist = !isRegist, reg = !reg">Вход</button>
                        <button @click="register = !register, reg = !reg">Регистрация</button>
                    </div>
                    </transition>
                    <transition>
                        <div class="register" v-if="register">
                            <div class="reg">
                                <div class="regist-reg">
                                    <h1>Вход</h1>
                                    <img src="@/assets/img/svg/close.svg" alt="" @click="register = !register">
                                </div>
                                <div class="log">
                                    <p>Введите свой номер телефона для регистрации</p>
                                    <input type="text" placeholder="+998 ( 73 ) 666-77-55">
                                    <button @click="pin = !pin, register = !register">Отправить</button>
                                </div>
                            </div>
                        </div>
                    </transition>

                    <transition>
                        <div class="register" v-if="pin">
                            <div class="reg">
                                <div class="regist-reg">
                                    <h1>Подтверждение</h1>
                                    <img src="@/assets/img/svg/close.svg" alt="" @click="pin = !pin">
                                </div>
                                <div class="log">
                                    <p>Введите код, отправленный на ваш номер телефона</p>
                                    <input :type="regist ? 'text' : 'password'"  placeholder="Введите код">
                                    <span class="eyess" @click="regist = !regist" >
                                        <img  v-if="!regist" src="@/assets/img/svg/eyes.svg" alt="">
                                        <img v-if="regist" src="@/assets/img/svg/eyes-hide.svg" alt="">
                                    </span>
                                    <button @click="tel = !tel, pin = !pin">Отправить</button>
                                </div>
                            </div>
                        </div>
                    </transition>

                    <transition>
                        <div class="register" v-if="tel">
                            <div class="choose">
                                <div class="regist-reg">
                                    <h1>выберите лицо</h1>
                                    <img src="@/assets/img/svg/close.svg" alt="" @click="tel = !tel">
                                </div>
                                <div class="face">
                                    <button>Физ лицо</button>
                                    <button>Юр лицо</button>
                                </div>
                            </div>
                        </div>
                    </transition>


                    <transition>
                        <div class="modal" v-if="isRegist">
                            <div class="login">
                                <div class="exit">
                                    <h1>Вход</h1>
                                    <img src="@/assets/img/svg/close.svg" alt="" @click="isRegist = !isRegist">
                                </div>
                                <div class="inlog">
                                    <input type="text" placeholder="Логин (номер телефона)">
                                    <input :type="regist ? 'text' : 'password'" placeholder="Пароль">
                                    <button class="eyes" @click="regist = !regist" >
                                        <img  v-if="!regist" src="@/assets/img/svg/eyes.svg" alt="">
                                        <img v-if="regist" src="@/assets/img/svg/eyes-hide.svg" alt="">
                                    </button>
                                    <div class="checkbox">
                                        <div class="check">
                                            <input type="checkbox">
                                            <p>Запомнить меня</p>
                                        </div>
                                        <NuxtLink class="forgot">Забыли пароль?</NuxtLink>
                                    </div>
                                    <NuxtLink class="btn">Войти</NuxtLink>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>

            </div>
        </header>

        <NuxtPage/>
        <footer>
            <div class="container">
                <div class="about-section">
                    <ul class="footer__about">
                    <li class="first">
                        <h1>Покупателям</h1>
                        <p>Как сделать заказ</p>
                        <p>Способы оплаты</p>
                        <p>Доставка</p>
                        <p>Возврат товара</p>
                        <p>Возврат денежных средств</p>
                        <p>Правила продажи</p>
                        <p>Вопросы и ответы</p>
                    </li>
                    <li class="second">
                        <h1>Наши проекты</h1>
                        <p>Продавайте на ТОП-ИТ </p>
                        <p>Перевозчикам</p>
                        <p>Откройте пункт выдачи</p>
                    </li>
                    <li class="third">
                        <h1>Наши проекты</h1>
                        <p>О нас</p>
                        <p>Реквизиты</p>
                        <p>Пресс-центр</p>
                        <p>Контакты</p>
                        <p>Вакансии</p>
                    </li>
                    <li class="fourth">
                        <h1>Наши проекты</h1>
                        <p>ЗОЖ и спорт</p>
                        <p>Детям</p>
                        <p>Трудоустройство</p>
                    </li>
                    </ul>
                    <ul class="footer__contact">
                        <li>
                            <h1>Мобильные устройства</h1>
                            <img class="google" src="@/assets/img/png/google.png" alt="">
                            <img src="@/assets/img/png/app.png" alt="">
                        </li>
                        <li class="display">
                            <h1>Мы в соцсетях</h1>
                            <img class="telega" src="@/assets/img/svg/telegram.svg" alt="">
                            <img class="insta" src="@/assets/img/svg/instagram.svg" alt="">
                            <img class="face" src="@/assets/img/svg/facebook.svg" alt="">
                            <img class="you" src="@/assets/img/svg/youtube.svg" alt="">
                        </li>
                    </ul>
                </div>
            </div>
            <hr>
            <div class="container">
                <div class="over-section">
                    <p>2021-2022 ©ТОП-ИТ. Все права защищены. Указанная стоимость товаров и условия их приобретения <br> действительны по состоянию на текущую  дату. Сайт разработан <a href="https://iteach.uz">iTeach</a> </p>
                    <div class="img-wrapper">
                        <img src="@/assets/img/png/click.png" alt="">
                        <img src="@/assets/img/png/humo.png" alt="">
                        <img src="@/assets/img/png/visa.png" alt="">
                        <img src="@/assets/img/png/uzcard.png" alt="">
                        <img src="@/assets/img/png/payme.png" alt="">
                    </div>
                </div>
            </div>
            <a href="#">
                <img src="@/assets/img/png/expend.png" alt="" class="top">
            </a>
        </footer>
    </div>
</template>

<script setup>
const isRegist = ref(false);
const regist =  ref(false)
const modal = ref(false)
const reg = ref(false)
const register = ref(false)
const catal = ref(false)
const arrow = ref(false)
const home = ref(false)
const tex = ref(false)
const wifi = ref(false)
const tel = ref(false)
const pin = ref(false)

const api = useRuntimeConfig().public;

const { data: menu } = useFetch( 
  api.baseUrl + "/product-manager/category/index" 
);
</script>

<style lang="scss" scoped>
.v-enter-from, .v-leave-to{
    opacity: 0;
}
.v-enter-active, .v-leave-active{
    transition: 0.3s;
}
.slide-enter-from{
    opacity: 0;
    translate: -50% -80%;
}
.slide-leave-to{
    opacity: 0;
    translate: 50% 10%;
}
.div{
    position: relative;
}
header{
    padding-top: 10px;
    font-weight: 500 ;
    margin-bottom: 12px;
    .isregist{
        display: flex;
        align-items: center;
        flex-direction: column;
        position: absolute;
        right: 340px;
        top: 110px;
        z-index: 9999;
        button{
            border-radius:5px ;
            width: 100%;
            height: 100%;
            padding: 12px 40px;
            border: none;
            transition: all .3s;
            &:hover{
                background: #2FB946;
                color: #fff;
                box-shadow: 1px 1px 20px 1px rgba(47, 185, 70, );
            }
            &:active{
                box-shadow: 1px 1px 20px 1px rgba(47, 185, 70, );
            }
            &:not(:last-child){
                margin-bottom: 5px;
            }
        }
    }
    .katal{
        z-index: 9999;
        position: fixed;
        background-color: rgba(0, 0, 0, 0.6);
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        div{
            background: #fff;
        }
        .ex{
            z-index: 5;
            position: fixed;
            top: 23.5px;
            left: 235px;
            border: 1px solid #D8DCE2;
            border-radius: 50%;
        }
        .menu-wrapper{
            position: fixed;
            z-index: 3;
            display: flex;
            flex-direction: column;
            top: 0;
            left: 0;
            width: 300px;
            background-color: #fff ;
            height: 100vh;
            padding-top: 60px;
            z-index: 4;
            hr{
                border: none;
                height: 1px;
                background: #D8DCE2;
            }
            h1{
                padding-left: 40px;
                padding-bottom: 20px;
                padding-top: 20px;
                font-size: 18px;
                line-height: 32px;
                color: #333;
                font-weight: 600;
                transition: all .3s;
                img{
                    padding-left: 30px;
                }
                .down{
                    padding-left: 55px;
                }
                .right{
                    padding-left: 55px;
                }
                &:hover{
                    background-color: #2FB946;
                    color: #fff;
                }
                &:hover{
                    opacity: 1;
                }
            }
            .menu-items{
                position: fixed;
                top: 0;
                left: 0;
                width: 300px;
                background: #fff;
                height: 100vh;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 30px;
                margin-top: 60px;
                .menu-item{
                    position: relative;
                    &:hover{
                            background-color: #2FB946;
                            color: #fff;
                        }
                    h2{
                        font-size: 18px;
                        line-height: 32px;
                        padding: 12px 24px;
                        transition: all .3s;
                        // &:hover {
                        //    rotate: 90px;
                        // }
                        img{
                            margin-left: 4px;
                        }
                    }
                    &:hover .rotate{
                        rotate: 180px;
                    }
                    &:hover .sub-menu{
                        opacity: 1;
                        visibility: visible;
                        top: 0;
                    }
                    .sub-menu{
                        padding-top: 100px;
                        transition: all .3s;
                        position: absolute;
                        left: 100%;
                        top: 200px;
                        width: 400px;
                        height: 100vh;   
                        background: #fff;
                        display: flex;
                        flex-direction: column;
                        gap: 30px;
                        opacity: 0;
                        visibility: hidden;
                        li{
                            text-align: left;
                            border: none;
                            &:hover{
                            color: #2FB946;
                            list-style-type: disc;
                            box-shadow: none;
                            transform: translateX(15px);
                        }
                        &:hover::before{
                            color: #2FB946;
                            list-style-type: disc;
                            opacity: 1;
                        }
                        &::before{
                            content: '';
                            position: absolute;
                            width:9px;
                            height: 9px;
                            border-radius: 50%;
                            background-color: #2FB946;
                            left: -15px;
                            top: 7px;
                            opacity: 0;
                        }
                        }
                    }
                }
            }
        }
    }
    .register{
        z-index: 9999;
        position: fixed;
        background-color: rgba(0, 0, 0, 0.6);
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        .choose{
            height: 222px;
            background-color: #fafafa;
            width: 492px;
        }
        .reg{
            width: 492px;
            height: 302px;
            background-color: #fafafa;
        }
        .regist-reg{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 19px 20px 19px 60px;
            background-color: #2FB946;
            margin-bottom: 30px;
            h1{
                font-size: 18px;
                line-height: 21px;
                color: #fff;
            }
        }
        .face{
            height: 120px;
            display: flex;
            align-items: center;
            justify-content: center;
            button{
                gap: 30px;
                padding: 12px 43px;
                border: 1px solid #D8DCE2;
                border-radius: 5px;
                background: #fff;
                font-size: 18px;
                line-height: 21px;
                font-weight: 700;
                &:not(:last-child){
                margin-right: 30px;
                }
            }
        }
        .log{
            margin-left: 60px;
            .eyess{
                border: none;
                padding: 0;
                background: #fff;
                position: absolute;
                right: 41%;
                bottom: 493px;
            }
           p{
                font-size: 14px;
                line-height: 22px;
                margin: auto;
                margin-bottom: 10px;
                color: #626364;
           }
           input{
            width: 372px;
            padding: 12px 0 12px 15px;
           }
           button{
            padding: 12px 36px;
            background: #2FB946;
            border: none;
            color: #fff;
            margin-top: 42px;
            border-radius: 5px;
            transition: all .3s;
            &:hover{
                box-shadow: 4px 4px 30px 4px rgba(47, 185, 70, );
            }
            &:active{
                box-shadow: 1px 1px 20px 1px rgba(47, 185, 70, );
            }
           }
        }
    }
    .modal{
        z-index: 9999;
        position: fixed;
        background-color: rgba(0, 0, 0, 0.6);
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        .exit{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 19px 20px 19px 60px;
            background-color: #2FB946;
            margin-bottom: 60px;
            h1{
                font-size: 18px;
                line-height: 21px;
                color: #fff;
            }
        }
        .login{
            width: 500px;
            height: 424px;
            background-color: #FAFAFA;
            .inlog{
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                input{
                width: 372px;
                height: 46px;
                padding: 12px 0 12px 15px;
                margin-bottom: 32px;
                border: 1px solid #D8DCE2;
                outline: none;
                }
                .eyes{
                    position: absolute;
                    right: 75px;
                    top: 90px;
                    background: inherit;
                    border: none;
                }
                .checkbox{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 31px;
                    .check{
                        margin-right: 85px;
                        display: flex;
                        align-items: center;
                        input{
                            margin-right: 10px;
                            margin-bottom: -1px;
                            width: 24px;
                            height: 24px;
                        }
                        p{
                            font-size: 16px;
                            line-height: 25px;
                        }
                    }
                    .forgot{
                        font-size: 16px;
                        line-height: 25px;
                        color: #0047FF;
                        &:hover{
                            text-decoration: underline;
                        }
                    }
                }
                .btn{
                    font-size: 18px;
                    line-height: 22px;
                    font-weight: 700;
                    padding: 12px 58px;
                    background-color: #2FB946;
                    color: #fff;
                    transition: all .3s;
                    margin-right: auto;
                    margin-left: 70px;
                    border-radius: 5px;
                    &:hover{
                        box-shadow: 4px 4px 30px 4px rgba(47, 185, 70, );
                    }
                    &:active{
                        box-shadow: 1px 1px 20px 1px rgba(47, 185, 70, );
                    }
                }
            }
        }
    }
}
.header-contact{
    margin-bottom: 21px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ul{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 50px;
        NuxtLink{
            font-weight: 500;
        }
    }
}
.section-bar{
    display: flex;
    align-items: center;
    justify-content: space-between;
    .katalog{
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #2FB946;
        padding: 7px 20px;
        border-radius:5px;
        color: #f5f5f5;
        transition: all .3s;
        border: none;
            &:hover{
                box-shadow: 4px 4px 30px 4px rgba(47, 185, 70, );
            }
            &:active{
                box-shadow: 1px 1px 20px 1px rgba(47, 185, 70, );
            }
        p{
            margin-left: 6px;
        }
    }
    .input{
        display: flex;
        align-items: center;
        button{
            display: flex;
            align-items: center;
            padding: 7px 15px 6px 19px;
            background-color: #2FB946;
            border: none;
            outline: none;
            border-radius:5px ;
            margin-left: -98px;
            transition: all .3s;
            color: #f5f5f5;
            &:hover{
                box-shadow: 4px 4px 30px 4px rgba(47, 185, 70, );
            }
            &:active{
                box-shadow: 1px 1px 20px 1px rgba(47, 185, 70, );
            }
        }
        input{
            padding-left: 20px;
            width: 721px;
            height: 38px;
            outline: none;
            border: 1px solid #D8DCE2;
            border-radius: 5px;
        }
    }
    ul{
        display: flex;
        align-items: center;
        gap: 10px;
        li{
            border: 1px solid #D8DCE2;
            border-radius: 5px;
            padding: 5px 9px;
            transition: all .3s;
            &:hover{
                box-shadow: 4px 4px 30px 4px rgba(47, 185, 70, );
            }
            &:active{
                box-shadow: 1px 1px 20px 1px rgba(47, 185, 70, );
            }
        }
    }
}

footer{
    position: relative;
    padding-top: 40px;
    color: #fff;
    background-color: #1D1C1C;
    padding-bottom: 23px;
    .top{
        position:absolute;
        padding: 12px 10px 9px 11px;
        background-color: #2FB946;
        border-radius: 50%;
        top: -20px;
        right: 220px;
    }
    p{
        color: #8F8E94;
    }
    hr{
        width: 100%;
        border: none;
        height: 1px;
        background-color: #857E7E4D;
        margin-bottom: 23px;
    }
    .container{
        .about-section{
            margin-bottom: 62px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .footer__about{
                display: flex;
                justify-content: space-between;
                li{
                    &:first-child{
                        margin-right: 45px;
                    }
                    &:nth-child(2){
                        margin-right: 63px;
                    }
                    &:nth-child(3){
                        margin-right: 135px;
                    }
                    // &:nth-child(4){
                    //     margin-right: 273px;
                    // }
                    h1{
                        font-size: 18px;
                        line-height: 21px;
                        margin-bottom: 20px;
                    }
                    p{
                        font-size: 14px;
                        line-height: 22px;
                        font-weight: 500;
                        transition: all .3s;
                        position: relative;
                        &:not(:last-child){
                            margin-bottom: 10px;
                        }
                        &:hover{
                            color: #2FB946;
                            list-style-type: disc;
                            transform: translateX(15px);
                        }
                        &:hover::before{
                            color: #2FB946;
                            list-style-type: disc;
                            opacity: 1;
                        }
                        &::before{
                            content: '';
                            position: absolute;
                            width: 7px;
                            height: 7px;
                            border-radius: 50%;
                            background-color: #2FB946;
                            left: -15px;
                            top: 7px;
                            opacity: 0;
                        }
                    }
                }
            }
            .footer__contact{
                padding-top: 40px;
                li{
                    &:not(:last-child){
                        margin-bottom: 40px;
                    }
                    display: flex;
                    flex-direction: column;
                    h1{
                        font-size: 18px;
                        line-height: 21px;
                        margin-bottom: 10px;
                    }
                    .google{
                        margin-bottom: 7px;
                    }
                }
                .display{
                    margin-bottom: 10px;
                    display: block;
                    img{
                        border-radius: 50%;
                        border: 1px solid #8F8E94;
                        &:not(:last-child){
                            margin-right: 16px;
                        }
                        &:hover{
                            background-color: rgba(47, 185, 70,0.5);
                        }
                    }
                    .telega{
                        border: 1px solid #2FB946;
                        padding: 14px 14px 14px 10px;
                        background-color: #2FB946;
                    }
                    .insta{
                        padding: 12px;
                    }
                    .face{
                        padding: 12px 17px;
                    }
                    .you{
                        padding: 16px 13px;
                    }
                }
            }
        }
        .over-section{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .img-wrapper{
            img{
                &:not(:last-child){
                    margin-right: 8px;
                }
            }
        }
    }
}
</style>