import Cart from "../../components/Cart";
import Header from "../../components/Header";
import LateralButtons from "../../components/LateralButtons";
import Main from "../../components/Main";
import productimage from './product.png'

import './style.css'

function ProductPage() {
    return (
        <>
            <Cart />
            <Header />
            <LateralButtons />
            <Main>
                <div className="product-page">
                    <div className="product-page-image">
                        <img src={productimage} alt="product image" />
                        <h1>ALIMENTADOR ANIMAL</h1>
                        <div className="product-page-image-price">
                            R$399,99
                        </div>
                        <div className="product-page-image-action">
                            <button>
                                Adicionar ao carrinho
                            </button>
                            <button>
                                Comprar
                            </button>
                        </div>
                    </div>
                    <div className="product-page-description">
                        <div class="product-page-description-section">
                            <h2>Controle Inteligente</h2>
                            <p>Preocupado com os horários malucos de alimentação do seu gato? Com o nosso dispensador automático de ração de 4L, você pode programar até 4 refeições diárias, cada uma com 1 a 9 porções (5 a 10 g cada). E o melhor: você controla tudo pelo aplicativo TuYa no seu smartphone, seja Android ou iOS. Com WiFi de 2,4 GHz, você pode garantir que seu gato sempre coma na hora certa, mesmo se estiver no trabalho, viajando ou relaxando no sofá.</p>
                        </div>
                        <div class="product-page-description-section">
                            <h2>Design Antientupimento</h2>
                            <p>Chega de ração presa! Nosso alimentador automático da Roilpet vem com um sistema de alimentação push-out, superando os designs rotativos antigos. Isso significa uma alimentação constante e sem bloqueios, para que seu gato nunca fique sem sua refeição.</p>
                        </div>
                        <div class="product-page-description-section">
                            <h2>Frescor e Segurança</h2>
                            <p>A tampa do nosso dispensador é feita de um anel de borracha de silicone e plástico ABS, garantindo que a ração do seu gato fique sempre fresquinha e crocante. Além disso, temos um sistema de bloqueio seguro e botões à prova de gatos, evitando que seu pet curioso faça uma bagunça.</p>
                        </div>
                        <div class="product-page-description-section">
                            <h2>Fonte de Alimentação Confiável</h2>
                            <p>Não se preocupe com quedas de energia! Nosso alimentador tem dois modos de alimentação e uma função de memória, garantindo que seu gato não perca uma refeição. E para completar, a tigela de aço inoxidável 304 previne qualquer descoloração do queixo dos gatos, mesmo com o uso prolongado.</p>
                        </div>
                    </div>
                </div>
            </Main>
        </>
    );
}

export default ProductPage;