import React from 'react';
import s from './Profile.module.scss'
import ProfileProductInner from './profileProductInner/ProfileProductInner';
import ProfileUserLeft from './profileUserLeft/ProfileUserLeft';
import ProfileUserRight from './profileUserRight/ProfileUserRight';

const Profile = () => {
    return (
        <section className={s.profile}>
            <div className={s.profileInfoInner}>
                <div className="container">
                    <p className={s.profilePage}>Главная<span>Личный кабинет</span></p>
                    <div className={s.profileUserInner}>
                        <ProfileUserLeft />
                        <ProfileUserRight />
                    </div>
                </div>
                <img className={s.bg} src="/images/catalog/users/bg.png" alt="bg" />
            </div>
            <div className="container">
                <ProfileProductInner />
            </div>
        </section>
    );
};

export default Profile;