import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <header className={"header"}>
                <ul className={'user_navi'}>
                    <li><a href="#">Zaloguj</a></li>
                    <li><a href="#">Załóż konto</a></li>
                </ul>
                <ul className={'header__navi'}>
                    <li><a href="#">Start</a></li>
                    <li><a href="#">O co chodzi?</a></li>
                    <li><a href="#">O nas</a></li>
                    <li><a href="#">Fundacje i organizacje</a></li>
                    <li><a href="#">Kontakt</a></li>
                </ul>
                <div className={'header__content'}>
                    <div className={'header__photo'}></div>
                    <div className={'header__title'}>
                        <h1>Zacznij pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce</h1>
                        <div className={'header__title--pattern'}></div>
                        <div className={"header__title--buttons"}>
                            <button className={'header__title--button'}><p>Oddaj <br/> rzeczy</p></button>
                            <button className={'header__title--button'}><p>Zorganizuj zbiórkę</p></button>
                        </div>

                    </div>
                </div>
            </header>
        )
    }
}

export default Header;