import React from 'react';
import moment from 'moment';

const Profile = ({ userData }) => {
   const faormateDate = moment(userData.birthDate).format('DD MMM YY');

   return (
      <div className='profile'>
         <div className="profile__name">{`${userData.firstName} ${userData.lastName}`}</div>
         <div className="profile__birth">{`Was born ${formateDate} in ${userData.birthPlace}`}</div>
      </div>
   );
};
export default Profile;