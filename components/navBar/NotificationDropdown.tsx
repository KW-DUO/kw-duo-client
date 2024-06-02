import React, { useEffect, useState } from 'react';

const NotificationDropdown = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // 더미 데이터를 설정합니다.
    const fetchNotifications = async () => {
      // 실제 API 호출 대신 더미 데이터를 사용합니다.
      const dummyData: any = [
        { id: 1, message: '새로운 댓글이 달렸습니다.' },
        { id: 2, message: '새로운 좋아요가 있습니다.' },
        { id: 3, message: '새로운 팔로워가 생겼습니다.' },
        { id: 4, message: '새로운 메시지가 도착했습니다.' },
      ];
      setNotifications(dummyData);
    };

    fetchNotifications();
  }, []);

  return (
    <div className="absolute right-0 mt-2 w-80 max-h-96 overflow-y-auto bg-white shadow-lg rounded-lg z-50">
      <ul className="divide-y divide-gray-200">
        {notifications.length > 0 ? (
          notifications.map((notification: any) => (
            <li key={notification} className="px-4 py-2 hover:bg-gray-100">
              {notification.message}
            </li>
          ))
        ) : (
          <li className="px-4 py-2 text-center text-gray-500">알림 내역이 없습니다.</li>
        )}
      </ul>
    </div>
  );
};

export default NotificationDropdown;
