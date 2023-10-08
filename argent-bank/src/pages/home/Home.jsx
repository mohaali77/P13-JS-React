import Banner from "../../components/banner/banner";
import Features from "../../components/features/features";

import iconChat from '../../img/icon-chat.png'
import iconMoney from '../../img/icon-money.png'
import iconSecurity from '../../img/icon-security.png'

export default function Home() {
    return <>
        <Banner />
        <section className="features">
            <Features
                image={iconChat}
                title='You are our #1 priority'
                description='Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.' />
            <Features
                image={iconMoney}
                title='More savings means higher rates'
                description='The more you save with us, the higher your interest rate will be!' />
            <Features
                image={iconSecurity}
                title='Security you can trust        '
                description='We use top of the line encryption to make sure your data and money is always safe.' />
        </section >
    </>
}