import os

def rename_png_files(folder_path):
    try:
        # 获取文件夹中的所有文件
        files = [f for f in os.listdir(folder_path) if f.endswith('.png')]

        # 按文件名排序（如果需要按创建时间排序，可使用 os.path.getctime）
        files.sort()

        # 遍历文件并重命名
        for index, file_name in enumerate(files, start=1):
            # 构造旧文件的完整路径
            old_path = os.path.join(folder_path, file_name)
            # 构造新文件名和完整路径
            new_name = f"{index}.png"
            new_path = os.path.join(folder_path, new_name)

            # 重命名文件
            os.rename(old_path, new_path)
            print(f"Renamed: {file_name} -> {new_name}")

        print("All PNG files have been renamed successfully!")
    except Exception as e:
        print(f"An error occurred: {e}")

# 指定文件夹路径
folder_path = r"C:\Users\Zhenheng Kang\Desktop\backside"  # 替换为你的文件夹路径
rename_png_files(folder_path)
