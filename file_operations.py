file = input("Enter the file name ==>")
with open(file, "r") as f1:
	file_val = f1.read()

print(file_val)
