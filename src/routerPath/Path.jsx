import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../component/main/Main';
import UserMain from '../component/user/UserMain';
import ShopMain from '../component/shop/ShopMain';
import UserLogin from '../component/user/UserLogin';
import UserJoin from '../component/user/UserJoin';
import ShopJoin from '../component/shop/ShopJoin';
import ManagerMain from '../component/manager/ManagerMain';
import ManagerApprove from '../component/manager/ManagerApprove';
import ManagerOrderReceipt from '../component/manager/ManagerOrderReceipt';
import ManagerRevenue from '../component/manager/ManagerRevenue';
import ShopMenu from '../component/shop/ShopMenu';
import ShopMenuRs from '../component/shop/ShopMenuRs';
import ShopMenuList from '../component/shop/ShopMenuList';
import ShopMenuedit from '../component/shop/ShopMenuedit';
import UserMenuCaList from '../component/user/UserMenuCaList';
import UserShopDetail from '../component/user/UserShopDetail';
import ShopOrder from '../component/shop/ShopOrder';
import RiderMain from '../component/rider/RiderMain';
import RiderCall from '../component/rider/RiderCall';
import RiderOrder from '../component/rider/RiderOrder';
import RiderOrderList from '../component/rider/RiderOrderList';
import RiderOrderReceipt from '../component/rider/RiderOrderReceipt';
import RiderOrderReceiptList from '../component/rider/RiderOrderReceiptList';
import RiderRechart from '../component/rider/RiderRechart';
import RiderRevenue from '../component/rider/RiderRevenue';
import MypageMain from '../component/mypage/MypageMain';
import MyorderDetails from '../component/mypage/MyorderDetails';
import ShopOrderReceipt from '../component/shop/ShopOrderReceipt';
import ShopRevenue from '../component/shop/ShopRevenue';
import MypageUserEdit from '../component/mypage/MypageUserEdit';
import UserSearchList from '../component/user/UserSearchList';
import MypageComments from '../component/mypage/MypageComments';
import UserShopIntroduce from '../component/user/UserShopIntroduce';
import ShopEdit from '../component/shop/ShopEdit';
import UserShopComment from '../component/user/UserShopComment';
import ShopComment from '../component/shop/ShopComment';
import ManagerUserblock from '../component/manager/ManagerUserblock';
import MypageReview from '../component/mypage/MypageReview';
import ShopCommentText from '../component/shop/ShopCommentText';
import ManagerShopleave from '../component/manager/ManagerShopleave';
import ShopUserJoin from '../component/shop/ShopUserJoin';
import ShopUserLogin from '../component/shop/ShopUserLogin';
import ManagerUserJoin from '../component/manager/ManagerUserJoin';
import ManagerUserLogin from '../component/manager/ManagerUserLogin';
import RiderUserJoin from '../component/rider/RiderUserJoin';
import RiderUserLogin from '../component/rider/RiderUserLogin';
const Path = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/UserMain" element={<UserMain />} />
            <Route path="/UserLogin" element={<UserLogin />} />
            <Route path="/UserJoin" element={<UserJoin />} />
            <Route path="/UserMenuCaList" element={<UserMenuCaList />} />
            <Route path="/UserShopDetail" element={<UserShopDetail />} />

            <Route path="/ManagerMain" element={<ManagerMain />} />
            <Route path="/ManagerApprove" element={<ManagerApprove />} />
            <Route path="/ManagerOrderReceipt" element={<ManagerOrderReceipt />} />
            <Route path="/ManagerRevenue" element={<ManagerRevenue />} />

            <Route path="/ShopJoin" element={<ShopJoin />} />
            <Route path="/ShopMain" element={<ShopMain />} />
            <Route path="/ShopMenu" element={<ShopMenu />} />
            <Route path="/ShopMenuRs" element={<ShopMenuRs />} />
            <Route path="/ShopMenuList" element={<ShopMenuList />} />
            <Route path="/ShopMenuedit" element={<ShopMenuedit />} />
            <Route path="/ShopOrder" element={<ShopOrder />} />
            <Route path="/ShopOrderReceipt" element={<ShopOrderReceipt/>} />
            <Route path="/ShopRevenue" element={<ShopRevenue/>} />

            <Route path="/MypageMain" element={<MypageMain />} />
            <Route path="/MyorderDetails" element={<MyorderDetails/>} />
            <Route path="/MypageUserEdit" element={<MypageUserEdit/>} />
        
            <Route path="/RiderMain" element={<RiderMain />} />
            <Route path="/RiderCall" element={<RiderCall />} />
            <Route path="/RiderOrder" element={<RiderOrder />} />
            <Route path="/RiderOrderList" element={<RiderOrderList />} />
            <Route path="/RiderOrderReceipt" element={<RiderOrderReceipt />} />
            <Route path="/RiderOrderReceiptList" element={<RiderOrderReceiptList />} />
            <Route path="/RiderRechart" element={<RiderRechart />} />
            <Route path="/RiderRevenue" element={<RiderRevenue />} />


            <Route path="/MypageComments" element={<MypageComments />} />
            <Route path="/UserShopIntroduce" element={<UserShopIntroduce />} />

            <Route path="/UserSearchList" element={<UserSearchList />} />
            <Route path="/ShopEdit" element={<ShopEdit />} />
            <Route path="/UserShopComment" element={<UserShopComment />} />
            <Route path="/ShopComment" element={<ShopComment />} />

            <Route path="/ManagerUserblock" element={<ManagerUserblock />} />

            <Route path="/MypageReview" element={<MypageReview />} />
            <Route path="/ShopCommentText" element={<ShopCommentText />} />
            <Route path="/ManagerShopleave" element={<ManagerShopleave />} />

            <Route path="/ShopUserJoin" element={<ShopUserJoin />} />
            <Route path="/ShopUserLogin" element={<ShopUserLogin />} />

            <Route path="/ManagerUserJoin" element={<ManagerUserJoin />} />
            <Route path="/ManagerUserLogin" element={<ManagerUserLogin />} />

            <Route path="/RiderUserJoin" element={<RiderUserJoin />} />
            <Route path="/RiderUserLogin" element={<RiderUserLogin />} />
        </Routes>
        
            

    );
};

export default Path;