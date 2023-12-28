import React, { Component } from 'react';
import styles from './LandingPage.module.css';
import GoogleReviews from '../../components/google-reviews/GoogleReviews';
import logo from '../../assets/images/logo.webp';
import logoPlaceX from '../../assets/images/placexwhite.webp';
import ImageVantagesDrop from '../../assets/images/section-vantagesdrop.webp';
import ImageMarketplaces from '../../assets/images/homemarketplaces.webp';
import ImageNavicon1 from '../../assets/images/navicon-3.webp';
import ImageNavicon2 from '../../assets/images/navicon-4.webp';
import ImagePrimeiraAgencia from '../../assets/images/home-primeira-agencia.webp';
import PaymentIcons from '../../assets/images/payment-icons.webp';
import RiArrowDropRightFill from 'remixicon-react/ArrowDropRightFillIcon';
import RiRocket2Fill from 'remixicon-react/Rocket2FillIcon';
import RiKey2Fill from 'remixicon-react/Key2FillIcon';
import RiToolsFill from 'remixicon-react/ToolsFillIcon';
import RiLightbulbFill from 'remixicon-react/LightbulbFillIcon';
import RiMedal2Fill from 'remixicon-react/Medal2FillIcon';
import RiWindow2Fill from 'remixicon-react/Window2FillIcon';
import RiVidiconFill from 'remixicon-react/VidiconFillIcon';
import RiShoppingBasketFill from 'remixicon-react/ShoppingBasketFillIcon';
import RiLayout3Fill from 'remixicon-react/Layout3FillIcon';
import RiFlashlightFill from 'remixicon-react/FlashlightFillIcon';
import RiReplyAllFill from 'remixicon-react/ReplyAllFillIcon';
import RiCheckDoubleFill from 'remixicon-react/CheckDoubleFillIcon';
import RiFilmFill from 'remixicon-react/FilmFillIcon';
import RiFileList3Fill from 'remixicon-react/FileList3FillIcon';
import RiFileSettingsFill from 'remixicon-react/FileSettingsFillIcon';
import RiCheckFill from 'remixicon-react/CheckFillIcon';
import RiArrowRightSLine from 'remixicon-react/ArrowRightSLineIcon';
import RiAddFill from 'remixicon-react/AddFillIcon';
import Separator from '../../assets/images/separator-lp.svg';
import SeparatorGreen from '../../assets/images/separator-green.svg';
import RiFireFill from 'remixicon-react/FireFillIcon';
import { Link } from 'react-router-dom';
import SeparatorGradient from '../../assets/images/separator-gradient.svg';
import Faq from 'react-faq-component';
import Whatsapp from '../../components/whatsapp/Whatsapp';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import ImageMainCta from '../../assets/images/tese.png';
import ImageBandeiraBr from '../../assets/images/br-lp-global.svg';
import ImageBandeiraUsa from '../../assets/images/usa-lp-global.svg';
import ImageStar from '../../assets/images/star.svg';

function VendaTodosOsDias() {
    const whatsapp = "https://api.whatsapp.com/send?phone=5511943600303&text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20um%20especialista%20em%20E-commerce";

    const data = {
        rows: [
          {
            title: "São 02 lojas diferentes?",
            content: "Sim, criamos uma loja com checkout e configurações brasileiras e outra com checkout, idioma e configurações globais. Desenvolvemos um layout de alta conversão personalizado que será utilizado nas 02 lojas."
          },
          {
            title: "Qual o idioma da loja global?",
            content: "Inglês ou espanhol, você poderá escolher."
          },
          {
            title: "Qual o prazo de desenvolvimento do pacote completo?",
            content: "Todo o desenvolvimento é exclusivo e personalizado, por isso o prazo total de desenvolvimento é de até 30 dias."
          },
          {
            title: "O domínio está incluso no pacote?",
            content: "Sim, está incluso o domínio .com e o domínio .com.br."
          },
          {
            title: "Quanto devo investir em marketing?",
            content: "Indicamos um investimento mínimo diário de R$50 para que você tenha retorno já nos primeiros dias. A definição do valor é relativo conforme o seu potencial de investimento e a velocidade de escala que deseja atingir."
          },
          {
            title: "Quanto tempo está incluso de assessoria de marketing no pacote?",
            content: "Disponibilizamos um especialista dedicado em marketing por 30 dias para gerenciar seus anúncios e campanhas. Após esse período você pode contratar a assessoria mensal de marketing ou seguir por conta própria gerenciando as campanhas que já estarão vendendo."
          },
          {
            title: "Como funciona a mineração e o cadastro dos 60 produtos?",
            content: "Temos um departamento especializado em mineração e cadastro de produtos, que faz manualmente toda a seleção para garantir exclusividade. Escolhemos os melhores produtos para o nicho da sua loja e após a sua aprovação fazemos o cadastro em português na loja nacional e em inglês ou espanhol na loja global."
          },
          {
            title: "Como funciona a mentoria?",
            content: "Através da nossa plataforma de estudos você terá acesso a milhares de aulas, gravadas e ao vivo, que te ajudarão a vender todos os dias na internet. Além disso, você conta também com um time de mentores para te auxiliar com tudo."
          },
          {
            title: "Sou iniciante, posso comprar o pacote sem ter experiência?",
            content: "Sim, pode comprar sem medo. Nossa equipe te auxilia com tudo do zero! Desde o primeiro contato com dropshipping até as vendas."
          },
          {
            title: "Vou ter suporte 24h?",
            content: "Sim, no pacote está incluso 60 dias de suporte, após esse período você tem a opção de manter o acesso por apenas R$139 à nossa plataforma de suporte com uma equipe de plantão em horário comercial e vídeos tutoriais que te auxiliam com todas as suas dúvidas a hora que você precisar."
          },
        ]
    }

    return (
        <div className={styles.container} id="lp-vendas">

            <section className={`${styles.containerChild} ${styles.containerMainCta}`}>
                <div className={`${styles.child1} ${styles.child}`}>
                    <div>
                        <div className={styles.logo}>
                                <a href="https://placex.com.br/">
                                <img src={logoPlaceX} alt=""/>
                            </a>

                            <div className={styles.especialistasBtn}>
                                <a href="" rel="noreferrer">
                                    Equipe de Vendas
                                </a>
                            </div> 
                        </div>
                        <div className={styles.gridTwoColumns}>
                            <div className={`${styles.gridTwoColumnInfo} ${styles.gridTwoColumnsChild}`}>
                                <h1 className={styles.gridTwoColumnInfoTitle}>
                                   suporte para plataformas
                                </h1>
                                
                                <div className={styles.lojaUSAeBRBenefits}>
                                    <p>
                                        <span><RiAddFill /> </span>
                                        60 Produtos nas duas Lojas (português e inglês)
                                    </p>
                                    <p>
                                        <span><RiAddFill /> </span>
                                        03 Anúncios + Assessor de Marketing
                                    </p>
                                    <p>
                                        <span><RiAddFill /> </span>
                                        Mentoria + Consultoria
                                    </p>
                                    <p>
                                        <span><RiAddFill /> </span>
                                        Curso com Mais de 300 Aulas
                                    </p>
                                    <p>
                                        <span><RiAddFill /> </span>
                                        Suporte Dedicado 24h
                                    </p>
                                    <p>
                                        <span><RiAddFill /> </span>
                                        Garantia Vitalícia
                                    </p>
                                </div>
                                <h5 className={styles.gridTwoColumnInfoCta}>
                                    <span><img src={ImageStar} alt="" /> </span>
                                    Aplicado por +9.000 negócios em 23 países
                                </h5>
                                <div className={`${styles.gridTwoColumnInfoBtn} ${styles.ctaBtn}`}>
                                    <a href="!#">
                                        Por
                                        <span>
                                            <h3> 12x de </h3>
                                        </span>
                                        <span>
                                            <h3>R$497</h3>
                                        </span>
                                    </a>
                                    <p>
                                        <span><RiArrowDropRightFill /> ou à vista com desconto R$4.699</span>
                                    </p>
                                </div>
                            </div>

                            <div className={`${styles.gridTwoColumnImage} ${styles.gridTwoColumnsChild}`}>
                                <img src={ImageMainCta} alt=""/>
                            </div>
                        </div>

                        <span className={styles.sectionSeparatorGreen}>
                            <img src={SeparatorGradient} alt=""/>
                        </span>
                    </div>

                </div>
            </section>


            <section className={styles.containerChild}>
                <div className={`${styles.child2} ${styles.child}`}>
                    <div className={styles.child2Content}>
                        <p className={styles.destaqueText}>
                            <span><RiRocket2Fill /></span>
                        </p>
                        <p className={styles.destaqueText}>Drop Global</p>
                        <h2>Tudo incluso no pacote</h2>
                    </div>

                    <span className={styles.sectionSeparator}>
                        <img src={Separator} alt=""/>
                    </span>
                </div>
            </section>

            <section className={styles.containerChild}>
                <div className={`${styles.child3} ${styles.child}`}>
                    <div>
                        <div>
                            <h2>Tudo o que você precisa saber para começar a vender Dropshipping Globalmente</h2>
                        </div>

                        <div className={styles.mainVideo}>
                            <iframe src="https://www.youtube.com/embed/hc0ZDRRkhl8?si=gFeTKntjGf-Qpx0j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        
                        <div>
                            <GoogleReviews />
                        </div>
                        
                        <div className={styles.carouselVideos}>
                            <Swiper
                                initialSlide={9}
                                loop={true}
                                spaceBetween={60}
                                pagination={{ clickable: true, dynamicBullets: true }}
                                autoplay={{ delay: 6000 }}
                                grabCursor={true}
                                modules={[Autoplay, Pagination]}
                                breakpoints={{
                                    0: { slidesPerView: 1 },
                                    400:{ slidesPerView: 1 },
                                    639: { slidesPerView: 2 },
                                    865:{ slidesPerView: 3 },
                                    1000:{ slidesPerView: 4 },
                                    1500:{ slidesPerView: 4 },
                                }}
                            >
                                <SwiperSlide className={styles.swiperContent}>
                                    <div className={styles.serviceContent}>
                                        <iframe src="https://www.youtube.com/embed/-76gQhPZKJw?si=TCLoqktaonaDX1IH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </SwiperSlide>
                                
                                <SwiperSlide className={styles.swiperContent}>
                                    <div className={styles.serviceContent}>
                                        <iframe src="https://www.youtube.com/embed/hc0ZDRRkhl8?si=SI3gAobIkPbYE-6f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className={styles.swiperContent}>
                                    <div className={styles.serviceContent}>
                                        <iframe src="https://www.youtube.com/embed/21J8D9yOE2Q?si=LmCYlQkOGq-B-omX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </SwiperSlide>
                                    
                                <SwiperSlide className={styles.swiperContent}>
                                    <div className={styles.serviceContent}>
                                        <iframe src="https://www.youtube.com/embed/OwkOLhnOpQk?si=UrT0eXlrE9AboGjO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </SwiperSlide>
                                    
                                <SwiperSlide className={styles.swiperContent}>
                                    <div className={styles.serviceContent}>
                                        <iframe src="https://www.youtube.com/embed/HnzudnjQFH0?si=UCfQIJzpF1ovRhAq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </SwiperSlide>
                                    
                                <SwiperSlide className={styles.swiperContent}>
                                    <div className={styles.serviceContent}>
                                        <iframe src="https://www.youtube.com/embed/ZHkNNMPhv7o?si=PnnEbB9o6piGoqJz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </SwiperSlide>
                                    
                                <SwiperSlide className={styles.swiperContent}>
                                    <div className={styles.serviceContent}>
                                        <iframe src="https://www.youtube.com/embed/vhVR1xfz80Y?si=ONLdcRbr4t-MEnZm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </SwiperSlide>
                                    
                                <SwiperSlide className={styles.swiperContent}>
                                    <div className={styles.serviceContent}>
                                        <iframe src="https://www.youtube.com/embed/GYPvdAp4FEY?si=oW6bkp_r5GuETaTt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </SwiperSlide>
                                    
                                <SwiperSlide className={styles.swiperContent}>
                                    <div className={styles.serviceContent}>
                                        <iframe src="https://www.youtube.com/embed/ohyIOIEPq7g?si=Tkz9CMl72t25cb0J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </SwiperSlide>
                                    
                                <SwiperSlide className={styles.swiperContent}>
                                    <div className={styles.serviceContent}>
                                        <iframe src="https://www.youtube.com/embed/IvEUCnoU-fI?si=Ca1tOg9fzOM3r8-b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </SwiperSlide>

                                <div className={styles.spacingNavigation}></div>
                            </Swiper>
                        </div>

                        <div className={`${styles.gridTwoColumnInfoBtn} ${styles.ctaBtn}`}>
                            <a href="!#">
                                Inscreva-se por 
                                <span>
                                    <h3> 12x </h3>
                                </span>
                                <span>
                                    <h3>R$97</h3>
                                </span>
                            </a>
                            <p>
                                <span><RiArrowDropRightFill /> ou à vista com desconto </span>
                                por R$997
                            </p>
                        </div>
                        
                        <span className={styles.sectionSeparator}>
                            <img src={Separator} alt=""/>
                        </span>                        
                    </div>
                </div>
            </section>

            <section className={styles.containerChild}>
                <div className={`${styles.child4} ${styles.child}`}>
                    <div>
                        <div>
                            <h2>Ahhh, mas eu já tentei ter uma Loja de Dropshipping e não consegui…</h2>
                        </div>

                        <div className={styles.gridTwoColumns}>
                            <div className={`${styles.gridTwoColumnImage} ${styles.gridTwoColumnsChild}`}>
                                <img src={ImageMarketplaces} alt=""/>
                            </div>

                            <div className={`${styles.gridTwoColumnInfo} ${styles.gridTwoColumnsChild}`}>
                                <p>Conhecemos a fundo o sentimento de tentar criar uma Loja de Dropshipping por conta própria ou a frustração de não vender e não saber o porquê.</p>
                                <p>
                                    <span className={styles.destaqueText}>Por isso garantimos: </span>
                                    essa não é só mais uma solução de Dropshipping.
                                    <span className={styles.underlineText}> O nosso pacote foi desenvolvido com base na experiência e entrega de mais de 9.000 Lojas Virtuais em 12 países.</span>
                                </p>
                                <div className={`${styles.gridTwoColumnInfoBtn} ${styles.ctaBtn}`}>
                                    <a href="!#">
                                        Inscreva-se por 
                                        <span>
                                            <h3> 12x </h3>
                                        </span>
                                        <span>
                                            <h3>R$97</h3>
                                        </span>
                                    </a>
                                    <p>
                                        <span><RiArrowDropRightFill /> ou à vista com desconto </span>
                                        por R$997
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <span className={styles.sectionSeparator}>
                            <img src={Separator} alt=""/>
                        </span>
                    </div>

                </div>
            </section>

            <section className={styles.containerChild}>
                <div className={`${styles.child5} ${styles.child}`}>
                    <div>
                    <div>
                            <h2>
                                <span className={styles.destaqueText}>Ao contratar agora, </span>
                                você terá:
                            </h2>
                        </div>

                        <div className={styles.gridCardsInfos}>
                            <div className={styles.gridCardInfoChild}>
                                <p>
                                    <span className={`${styles.destaqueText} ${styles.iconStyle}`}><RiKey2Fill /></span>
                                </p>
                                <p>
                                    <span className={styles.destaqueText}><h6>02 Lojas de Dropshipping: </h6></span>
                                    vamos criar e entregar duas Lojas Virtuais personalizadas para você vender dentro e fora do Brasil faturando em real e em dólar.
                                </p>
                            </div>
                            <div className={styles.gridCardInfoChild}>
                                <p>
                                    <span className={`${styles.destaqueText} ${styles.iconStyle}`}><RiToolsFill /></span>
                                </p>
                                <p>
                                    <span className={styles.destaqueText}><h6>Equipe de Marketing Dedicada: </h6></span>
                                    disponibilizaremos um gestor de tráfego dedicado para atender sua conta e garantir que você venda nos primeiros dias.
                                </p>
                            </div>
                            <div className={styles.gridCardInfoChild}>
                                <p>
                                    <span className={`${styles.destaqueText} ${styles.iconStyle}`}><RiMedal2Fill /></span>
                                </p>
                                <p>
                                    <span className={styles.destaqueText}><h6>60 Produtos Validados nas 02 lojas: </h6></span>
                                    faremos a seleção de cada produto e após sua aprovação cadastraremos com descrições de alta conversão.
                                </p>
                            </div>
                            <div className={styles.gridCardInfoChild}>
                                <p>
                                    <span className={`${styles.destaqueText} ${styles.iconStyle}`}><RiLightbulbFill /></span>
                                </p>
                                <p>
                                    <span className={styles.destaqueText}><h6>Suporte Exclusivo 24h: </h6></span>
                                    forneceremos acompanhamento e suporte dedicado direto pela nossa plataforma exclusiva de atendimento ao cliente.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h3>Você está a um clique de ter duas lojas completas desenvolvidas pela primeira agência especializada em Dropshipping do Brasil. Contrate agora, fature em dobro e conquiste a sua liberdade financeira.</h3>
                        </div>

                        <div className={`${styles.gridTwoColumnInfoBtn} ${styles.ctaBtn}`}>
                            <a href="!#">
                                Inscreva-se por 
                                <span>
                                    <h3> 12x </h3>
                                </span>
                                <span>
                                    <h3>R$97</h3>
                                </span>
                            </a>
                            <p>
                                <span><RiArrowDropRightFill /> ou à vista com desconto </span>
                                por R$997
                            </p>
                        </div>
                                        
                        <span className={styles.sectionSeparator}>
                            <img src={Separator} alt=""/>
                        </span>
                    </div>
                </div>
            </section>

            <section className={styles.containerChild}>
                <div className={`${styles.child6} ${styles.child}`}>
                    <div>
                        <div className={styles.titleSub}>
                            <h2>    
                                E você também terá
                                <span className={styles.destaqueText}> Mentoria com um time de Especialistas</span>
                            </h2>
                            <p>Além de executarmos tudo para você, também te ensinamos a vender todos os dias na internet.</p>
                        </div>

                        <div className={styles.gridCardsInfos}>
                            <div className={`${styles.gridCardInfoChild} ${styles.borderLeft}`}>
                                <p>
                                    <span className={`${styles.destaqueText} ${styles.iconStyle}`}><RiWindow2Fill /></span>
                                </p>
                                <p>
                                    <span className={styles.destaqueText}>Gerencie os pedidos da sua Loja</span>
                                    Ensinamos o passo-a-passo para que você possa de maneira simplificada fazer a gestão dos seus pedidos e das suas vendas.
                                </p>
                            </div>
                            <div className={`${styles.gridCardInfoChild} ${styles.borderRight}`}>
                                <p>
                                    <span className={`${styles.destaqueText} ${styles.iconStyle}`}><RiVidiconFill /></span>
                                </p>
                                <p>
                                    <span className={styles.destaqueText}>Seu E-commerce do seu jeito</span>
                                    Personalize e altere cores, banners, imagens e os textos da sua loja com tutoriais desenvolvidos por uma equipe de design qualificada.
                                </p>
                            </div>
                            <div className={`${styles.gridCardInfoChild} ${styles.borderLeft}`}>
                                <p>
                                    <span className={`${styles.destaqueText} ${styles.iconStyle}`}><RiShoppingBasketFill /></span>
                                </p>
                                <p>
                                    <span className={styles.destaqueText}>Marketing para Facebook e Instagram</span>
                                    Você vai aprender, do zero, tudo que precisa para atrair os melhores clientes para o seu e-commerce através dos anúncios patrocinados.
                                </p>
                            </div>
                            <div className={`${styles.gridCardInfoChild} ${styles.borderRight}`}>
                                <p>
                                    <span className={`${styles.destaqueText} ${styles.iconStyle}`}><RiLayout3Fill /></span>
                                </p>
                                <p>
                                    <span className={styles.destaqueText}>Mineração de Produtos e Fornecedores</span>
                                    Aprenda como selecionar produtos de alta conversão e escolher os fornecedores certos para sua Loja de Dropshipping.
                                </p>
                            </div>
                            <div className={`${styles.gridCardInfoChild} ${styles.borderLeft}`}>
                                <p>
                                    <span className={`${styles.destaqueText} ${styles.iconStyle}`}><RiFlashlightFill /></span>
                                </p>
                                <p>
                                    <span className={styles.destaqueText}>Como utilizar IA para vender mais</span>
                                    Criamos e disponibilizamos uma metodologia desenvolvida para otimizar toda sua operação utilizando Inteligência Artificial.
                                </p>
                            </div>
                            <div className={`${styles.gridCardInfoChild} ${styles.borderRight}`}>
                                <p>
                                    <span className={`${styles.destaqueText} ${styles.iconStyle}`}><RiReplyAllFill /></span>
                                </p>
                                <p>
                                    <span className={styles.destaqueText}>Como prestar o melhor atendimento</span>
                                    Através de uma equipe premiada você irá aprender a fornecer o melhor atendimento e suporte ao seu cliente no seu e-commerce.
                                </p>
                            </div>
                        </div>

                        <div className={`${styles.gridTwoColumnInfoBtn} ${styles.ctaBtn}`}>
                            <a href="!#">
                                Inscreva-se por 
                                <span>
                                    <h3> 12x </h3>
                                </span>
                                <span>
                                    <h3>R$97</h3>
                                </span>
                            </a>
                            <p>
                                <span><RiArrowDropRightFill /> ou à vista com desconto </span>
                                por R$997
                            </p>
                        </div>
                                
                        <span className={styles.sectionSeparator}>
                            <img src={Separator} alt=""/>
                        </span>
                    </div>
                </div>
            </section>

            <section className={styles.containerChild}>
                <div className={`${styles.child7} ${styles.child}`}>
                    <div>
                        <div className={styles.titleSub}>
                            <h2>Acompanhe todas as etapas do desenvolvimento com reuniões de alinhamento</h2>
                            <p>Pensamos em absolutamente tudo e compreendemos a importância de você acompanhar de perto todas as execuções.</p>
                        </div>

                        <div className={styles.gridCardsInfos}>
                            <div className={styles.gridCardInfoChild}>
                                <div>
                                    <img src={ImageNavicon1} alt=""/>
                                </div>
                                <div>
                                    <h3>Reunião Start</h3>
                                    <p>Após a contratação do pacote fazemos uma reunião com você para definir as personalizações da sua loja e também para te orientar sobre tudo.</p>
                                </div>
                            </div>
                            <div className={styles.gridCardInfoChild}>
                                <div>
                                    <img src={ImageNavicon2} alt=""/>
                                </div>
                                <div>
                                    <h3>Reunião de Aprovação</h3>
                                    <p>Criamos sua loja com exclusividade seguindo suas ideias e referências, e após o desenvolvimento você aprova tudo para que fique do seu jeito.</p>
                                </div>
                            </div>
                            <div className={styles.gridCardInfoChild}>
                                <div>
                                    <img src={ImageNavicon2} alt=""/>
                                </div>
                                <div>
                                    <h3>Reunião de Marketing</h3>
                                    <p>Com toda criação concluída nossa equipe de marketing alinha em uma reunião dedicada com você as estratégias dos anúncios patrocinados.</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2>E depois do desenvolvimento?</h2>
                            <p>Nosso time de mentores especializados estão sempre de plantão para tirar suas dúvidas e auxiliar no gerenciamento da sua loja para você vender todos os dias na internet.</p>
                        </div>
                                
                        <div className={`${styles.gridTwoColumnInfoBtn} ${styles.ctaBtn}`}>
                            <a href="!#">
                                Inscreva-se por 
                                <span>
                                    <h3> 12x </h3>
                                </span>
                                <span>
                                    <h3>R$97</h3>
                                </span>
                            </a>
                            <p>
                                <span><RiArrowDropRightFill /> ou à vista com desconto </span>
                                por R$997
                            </p>
                        </div>
        
                        <span className={styles.sectionSeparator}>
                            <img src={Separator} alt=""/>
                        </span>
                    </div>
                </div>
            </section>

            <section className={`${styles.containerChild} ${styles.sectionBg}`}>
                <div className={`${styles.child8} ${styles.child}`}>
                    <div>
                        <div>
                            <h2>Todos os Bônus que você recebe ao adquirir nosso pacote:</h2>
                        </div>

                        <div className={styles.gridCardsInfos}>
                            <div className={styles.gridCardInfoChild}>
                                <img src={ImageMarketplaces} alt="" />
                            </div>

                            <div className={styles.gridCardInfoChild}>
                                <h2>Integração da Printful para venda de produtos personalizados sob demanda sem estoque</h2>

                                <p>A Printful é a maior empresa de Print-on-Demand do mundo. Ela disponibiliza mais de 340 produtos para serem personalizados com a sua marca.</p>
                            </div>
                        </div>

                        <div className={styles.gridCardsMiniInfos}>
                            <div className={styles.gridCardMiniInfoChild}>
                                <div>
                                    <span><RiCheckDoubleFill /></span>
                                </div>
                                <div>
                                    <p>Tema Extra de Alta Conversão</p>
                                </div>
                            </div>
                            <div className={styles.gridCardMiniInfoChild}>
                                <div>
                                    <span><RiCheckDoubleFill /></span>
                                </div>
                                <div>
                                    <p>Curso de Técnicas e Estratégias de Vendas</p>
                                </div>
                            </div>
                            <div className={styles.gridCardMiniInfoChild}>
                                <div>
                                    <span><RiCheckDoubleFill /></span>
                                </div>
                                <div>
                                    <p>Acesso a Fornecedores Nacionais Exclusivos</p>
                                </div>
                            </div>
                            <div className={styles.gridCardMiniInfoChild}>
                                <div>
                                    <span><RiCheckDoubleFill /></span>
                                </div>
                                <div>
                                    <p>Consultoria de Contabilidade</p>
                                </div>
                            </div>
                            <div className={styles.gridCardMiniInfoChild}>
                                <div>
                                    <span><RiCheckDoubleFill /></span>
                                </div>
                                <div>
                                    <p>Condições Especiais em Apps e Plataformas</p>
                                </div>
                            </div>
                            <div className={styles.gridCardMiniInfoChild}>
                                <div>
                                    <span><RiCheckDoubleFill /></span>
                                </div>
                                <div>
                                    <p>Receba um Funil de Vendas Validado</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.title}>
                            <h2>
                                <span>Bônus Exclusivos </span>
                                para Venda Global
                            </h2>
                        </div>

                        <div className={`${styles.gridCardsMiniInfos} ${styles.miniInfoTwoColumns}`}>
                            <div className={styles.gridCardMiniInfoChild}>
                                <div>
                                    <span><RiCheckDoubleFill /></span>
                                </div>
                                <div>
                                    <p>Metodologia para Mineração Global</p>
                                </div>
                            </div>
                            <div className={styles.gridCardMiniInfoChild}>
                                <div>
                                    <span><RiCheckDoubleFill /></span>
                                </div>
                                <div>
                                    <p>Estudo Analítico dos Principais Países</p>
                                </div>
                            </div>
                        </div>

                        <div className={`${styles.gridTwoColumnInfoBtn} ${styles.ctaBtn}`}>
                            <a href="!#">
                                Inscreva-se por 
                                <span>
                                    <h3> 12x </h3>
                                </span>
                                <span>
                                    <h3>R$97</h3>
                                </span>
                            </a>
                            <p>
                                <span><RiArrowDropRightFill /> ou à vista com desconto </span>
                                por R$997
                            </p>
                        </div>
        
                        <span className={styles.sectionSeparator}>
                            <img src={SeparatorGreen} alt=""/>
                        </span>
                    </div>
                </div>
            </section>

            <section className={styles.containerChild}>
                <div className={`${styles.child9} ${styles.child}`}>
                    <div>
                        <div className={styles.gridTwoColumns}>
                            <div className={styles.gridTwoColumnsChild}>
                                <div>
                                    <img src={logo} alt="" />
                                </div>

                                <h2>
                                    Pacote 02 em 01:
                                    <span className={styles.destaqueText}> sua marca faturando em dobro</span>
                                </h2>

                                <p>Tudo que você precisa para vender dentro e fora do Brasil.</p>

                                <p className={styles.iconStyle}>
                                    <span><RiFilmFill /></span>
                                    Desenvolvimento Completo
                                </p>
                                <p className={styles.iconStyle}>
                                    <span><RiFileList3Fill /></span>
                                    Mentoria e Consultoria
                                </p>
                                <p className={styles.iconStyle}>
                                    <span><RiFileSettingsFill /></span>
                                    Suporte Especializado 24h
                                </p>
                            </div>

                            <div className={styles.gridTwoColumnsChild}>
                                <img src={ImageVantagesDrop} alt="" />
                            </div>
                        </div>

                        <div className={styles.title}>
                            <h2>
                                Disponibilizamos 1.000 pacotes com duas lojas a preço de uma e
                                <span className={styles.destaqueText}> já vendemos 639 pacotes</span>
                                ,
                                <span className={styles.underlineText}> , tome sua decisão agora!</span>
                            </h2>
                        </div>

                        <div>
                            <img src={ImagePrimeiraAgencia} alt="" />
                        </div>

                        <div className={`${styles.gridTwoColumns} ${styles.lastChild}`}>
                            <div className={styles.gridTwoColumnsChild}>
                                <p>
                                    <span className={styles.destaqueText}><RiCheckFill /></span>
                                    01 Loja no Brasil em Real - 
                                    <span className={styles.destaqueText}> R$3.999</span>
                                </p>
                                <p>
                                    <span className={styles.destaqueText}><RiCheckFill /></span>
                                    01 Loja no Exterior em Dólar - 
                                    <span className={styles.destaqueText}> R$4.999</span>
                                </p>
                                <p>
                                    <span className={styles.destaqueText}><RiCheckFill /></span>
                                    60 Produtos (português e inglês) - 
                                    <span className={styles.destaqueText}> R$2.799</span>
                                </p>
                                <p>
                                    <span className={styles.destaqueText}><RiCheckFill /></span>
                                    03 Anúncios + Assessor de Marketing - 
                                    <span className={styles.destaqueText}> R$1.999</span>
                                </p>
                                <p>
                                    <span className={styles.destaqueText}><RiCheckFill /></span>
                                    Mentoria + Consultoria - 
                                    <span className={styles.destaqueText}> R$1.499</span>
                                </p>
                                <p>
                                    <span className={styles.destaqueText}><RiCheckFill /></span>
                                    Curso com Mais de 300 Aulas - 
                                    <span className={styles.destaqueText}> R$1.299</span>
                                </p>
                                <p>
                                    <span className={styles.destaqueText}><RiCheckFill /></span>
                                    Suporte Dedicado 24h - 
                                    <span className={styles.destaqueText}> R$999</span>
                                </p>
                                <p>
                                    <span className={styles.destaqueText}><RiCheckFill /></span>
                                    Integração com a Printful - 
                                    <span className={styles.destaqueText}> R$999</span>
                                </p>
                                <p>
                                    <span className={styles.destaqueText}><RiCheckFill /></span>
                                    Pacote com 08 bônus extras - 
                                    <span className={styles.destaqueText}> R$2.999</span>
                                </p>

                                <h3>
                                    TOTAL DE:
                                    <span className={styles.destaqueText}> R$21.591</span>
                                </h3>
                            </div>

                            <div className={styles.gridTwoColumnsChild}>
                                <div className={styles.logoInscrever}>
                                    <img src={logo} alt="" />
                                </div>

                                <div className={styles.ctaOther}>
                                    <p>
                                        <span>Por apenas</span>
                                        <span className={`${styles.ctaDestaque} ${styles.destaqueText}`}>
                                            <span>12x de </span>
                                            <span>
                                                <h3>R$97,00</h3>
                                            </span>
                                        </span>
                                    </p>
                                    <p>
                                        ou
                                        <span className={styles.underlineText}> R$997 </span>
                                        à vista
                                    </p>
                                </div>

                                <div className={styles.inscrever}>
                                    <h3>CONTRATE AGORA</h3>
                                </div>

                                <div className={styles.paymentIcons}>
                                    <img src={PaymentIcons} alt="" />
                                </div>                   
                            </div>
                        </div>
        
                        <span className={styles.sectionSeparator}>
                            <img src={Separator} alt=""/>
                        </span>
                    </div>
                </div>
            </section>

            <section className={styles.containerChild}>
                <div className={`${styles.child10} ${styles.child}`}>
                    <div>
                        <div>
                            <GoogleReviews />
                        </div>

                        <div className={styles.gridTwoColumns}>
                            <div className={styles.gridTwoColumnsChild}>
                                <div>
                                    <img src={ImageNavicon1} alt="" />
                                </div>
                            </div>

                            <div className={styles.gridTwoColumnsChild}>
                                <div>
                                    <h3>Garantia Vitalícia</h3>
                                    <p>Você recebe nossa Garantia Técnica para sempre, assegurando que a solução adquirida funcionará conforme especificações técnicas prometidas. Esta garantia é válida para clientes que possuírem nosso suporte mensal.</p>
                                </div>
                            </div>
                        </div>

                        <span className={styles.sectionSeparator}>
                            <img src={Separator} alt=""/>
                        </span>
                    </div>

                </div>
            </section>

            <section className={`${styles.containerChild} ${styles.faqSection}`}>
                <div className={`${styles.child11} ${styles.child}`}>
                    <div>
                        <div className={styles.title}>
                            <h2>Ainda com dúvida?</h2>
                            <p>Abaixo você encontra as perguntas mais comuns sobre o pacote</p>
                        </div>

                        <div className={styles.faq}>
                            <Faq data={data}/>
                        </div>

                        <div className={`${styles.gridTwoColumnInfoBtn} ${styles.ctaBtn}`}>
                            <a href="!#">
                                Inscreva-se por 
                                <span>
                                    <h3> 12x </h3>
                                </span>
                                <span>
                                    <h3>R$97</h3>
                                </span>
                            </a>
                            <p>
                                <span><RiArrowDropRightFill /> ou à vista com desconto </span>
                                por R$997
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${styles.containerChild} ${styles.footerBg}`}>
                <div className={`${styles.child12} ${styles.child}`}>
                    <div className={styles.footerGrid}>
                        <div>
                            <img src={logo} alt="" />
                        </div>

                        <p>Somos a Primeira Agência especializada em Dropshipping do Brasil e já entregamos mais de 9.000 lojas em 12 países.</p>

                        <a href="!#">
                            Quero minhas lojas 
                            <span><RiArrowRightSLine /></span>
                        </a>

                        <div className={styles.copy}>
                            <p>© 2023 Goodds - Todos os direitos reservados</p>
                        </div>  
                    </div>
                </div>
            </section>

            <Whatsapp whatsappMessage={whatsapp} />
        </div>
    )
}

export default VendaTodosOsDias;