class Solution:
    def findLongestChain(self, pairs: List[List[int]]) -> int:
        for i in range(0,len(pairs)):
            min_idx=i
            for j in range(i,len(pairs)):
                if pairs[min_idx][1]>pairs[j][1]:
                    min_idx=j
            temp=pairs[i]
            pairs[i]=pairs[min_idx]
            pairs[min_idx]=temp
        k=1
        while k<len(pairs):
            if pairs[k-1][1]>=pairs[k][0]:
                pairs.pop(k)
                k-=1
            k+=1
        return len(pairs)