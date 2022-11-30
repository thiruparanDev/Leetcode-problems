class Solution:
    def divide(self, dividend: int, divisor: int) -> int:
        a=abs(dividend)
        b=abs(divisor)
        tot_count=0
        signA= 'p'
        signB= 'p'
        if dividend<0:
            signA='n'
        if divisor<0:
            signB='n'
        while b<=a:
            count=1
            dec=b
            while dec<=a:
                a-=dec
                tot_count+=count
                count+=count
                dec+=dec
        if (signA=='n' and signB=='p') or (signA=='p' and signB=='n'):
            tot_count = -abs(tot_count)
        if tot_count>=2**31-1:
            return 2**31-1
        elif tot_count<=pow(-2,31):
            return pow(-2,31)
        else:
            return tot_count