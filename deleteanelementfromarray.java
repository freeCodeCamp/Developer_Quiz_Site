

public class deleteanelementfromarray {
    public static int delete(int a[],int key)
    {
        int i=0;
        int n=a.length;
        for (;i<n;i++)
        {
            if(a[i]==key)
            {
                break;
            }
        }
        //if the element is not found then we can return the size as the element is
        // not found so the size remains the same
        if (i==n) return n;
        for (int j=i;j<n-1;j++)
        {
            a[j]=a[j+1];
        }
        //if the elemnt is deleted then return size -1
        return n-1;
    }
    public static void main(String [] args)
    {
        int a[]={1,2,4,6,5};
        int key=1;
        delete(a,key);
        for (int e:a) {
            System.out.println(e+"");

        }

    }
}
