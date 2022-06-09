p = [1 ,4, 3, 2, 5]
d = [8, 16, 25, 9, 36]

p_val = []
d_val = []
final_ans = []

for i in p:
	l = i**2
	p_val.append(l)
for n in d:
	k = round(n**(1/2), 3)
	d_val.append(k)
print(p_val)
print(d_val)

for t in range(0, len(p_val)):
	f_val = round(p_val[t] - d_val[t],2)
	final_ans.append(f_val)

print(final_ans)
