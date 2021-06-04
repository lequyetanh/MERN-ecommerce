import React, {Fragment} from 'react';
import './Footer.css';

function Footer() {
  return (
    <Fragment>
      <div className="footer">
        <div className="container flexbox-start-between">
          <div className="footer1">
            <img src="" />
            <p>
                Copyright ® 2019 Bilu Mới All Rights Reserved.
            </p>
          </div>
          <div className="footer2">
            <p>Quốc Gia Nổi Bật</p>
            <p>Phim Hàn Quốc</p>
            <p>Phim Trung Quốc</p>
            <p>Phim Thái Lan</p>
            <p>Phim Nhật Bản</p>
            <p>Phim Mỹ</p>
            <p>Phim Hồng Kông</p>
            <p>Phim Đài Loan</p>
            <p>Phim Canada</p>
            <p>Phim Châu Âu</p>
          </div>
          <div className="footer2">
            <p>Danh Sách Phim</p>
            <p>Phim Chiếu Rạp</p>
            <p>Phim Mới</p>
            <p>Phim Xem Nhiều</p>
            <p>Phim Bộ</p>
            <p>Phim Lẻ</p>
            <p>Phim Hoạt Hình</p>
          </div>
          <div className="footer2">
            <p>Điều Khoản Sử Dụng</p>
            <p>Chính Sách Riêng Tư</p>
            <p>Khiếu Nại Bản Quyền</p>
            <a className="about matb-50">Giới Thiệu</a>
            <p>Liên hệ</p>
          </div>
          <div className="footer2">
            <p>Liên Hệ</p>
            <a className="yellowcolor fs-16">Email: bilutv.org@gmail.com</a><br/>
            <a className="bluecolor fs-16">FaceBook<i className="fab fa-facebook-square marl-3"></i></a><br/>
            <a className="fs-16">Twitter<i className="fab fa-twitter-square marl-3"></i></a><br/>
            <a className="fs-16">Youtube<i className="fab fa-youtube marl-3"></i></a><b/>
            <a className="fs-16">Instagram<i className="fab fa-instagram marl-3"></i></a><br/>
          </div>
        </div>

        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
      </div>

    </Fragment>
  );
}

export default Footer;
