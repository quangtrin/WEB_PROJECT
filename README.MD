# cài đặt client
cd client (..../WEB_PROJECT/client)
# thêm thư viện
npm install i
# chạy 
npm run watch-client

# cài đặt server
cd server (..../WEB_PROJECT/server)
# cài đặt auth mysql 
tạo file .env tạo các biến global với tên (DATABASTE_HOST, DATABASE_USER, DATABASE_PORT, DATABASE_NAME, DATABASE_PASSWORD)

=> có thể copy từ file .env.examp và thay đổi giá trị biến
# import data mySQL
main_login_user.sql
# thêm thư viện
npm install i
# chạy
npm run watch-server