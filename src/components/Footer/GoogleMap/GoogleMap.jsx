import React from 'react';

const Map = () => {
  return (
   <div className='Googlemap'>
  <iframe
    title="Google Maps"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.94282862218333!2d106.64483984036657!3d10.804781985737469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529f79e49d0d1%3A0x3b163195cac74828!2zQ8ahbSBjaGF5IDFLIELhu5MgxJDhu4EgS2hhaSBUw6Jt!5e0!3m2!1svi!2s!4v1706711586313!5m2!1svi!2s"
    width="600"
    height="450"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
  <div className='map-text'>
    <h3>Thông tin liên hệ</h3>
    <p><strong>Địa chỉ</strong>: 201 Đường Nguyễn Hồng Đào, Phường 14, Hồ Chí Minh</p>
    <p><strong>Điện thoại</strong>: 093 696 2323</p>
    <p><strong>Hotline</strong>: (028) 36.20.28.26</p>
    <p><strong>Email</strong>: amthucchayphathoa@gmail.com</p>
    <p><strong>Website</strong>: www.nhahangchayphathoa.com.vn</p>
  </div>
</div>
  );
}

export default Map;
