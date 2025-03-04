import os
import pymysql

def insert_images_to_database(folder_path, db_config):
    try:
        # 连接到数据库
        connection = pymysql.connect(
            host=db_config['host'],
            user=db_config['user'],
            password=db_config['password'],
            database=db_config['database'],
            charset='utf8mb4'
        )
        cursor = connection.cursor()

        # 获取文件夹中的所有图片，按文件名排序
        image_files = [f for f in os.listdir(folder_path) if f.endswith(('.png', '.jpg', '.jpeg'))]
        image_files.sort(key=lambda x: int(os.path.splitext(x)[0]))  # 按文件名前的数字排序

        for index, image_file in enumerate(image_files, start=1):
            # 读取图片文件
            image_path = os.path.join(folder_path, image_file)
            with open(image_path, 'rb') as file:
                image_data = file.read()

            # 更新数据库中的记录
            sql = "UPDATE qsl SET backside = %s WHERE FID = %s"
            cursor.execute(sql, (image_data, index))
            print(f"Inserted {image_file} into FID={index}")

        # 提交事务
        connection.commit()
        print("All images have been successfully inserted into the database!")

    except Exception as e:
        print(f"An error occurred: {e}")
    finally:
        # 关闭数据库连接
        if cursor:
            cursor.close()
        if connection:
            connection.close()

# 配置数据库连接信息
db_config = {
    'host': 'localhost',       # 数据库主机地址
    'user': 'root',            # 数据库用户名
    'password': '162534',    # 数据库密码
    'database': 'website'  # 数据库名称
}

# 指定图片所在的文件夹路径
folder_path = r"C:\Users\Zhenheng Kang\Desktop\backside"  # 替换为图片文件夹的路径

# 调用函数
insert_images_to_database(folder_path, db_config)
