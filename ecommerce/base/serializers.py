# from rest_framework import serializers
# from django.contrib.auth.models import User
# from .models import  Review , Product  , Order , OrderItems , ShippingAddress


# class UserSerializer (serializers.ModelSerializer):
#     class Meta :
#         model = User
#         fields = ['first_name']



# class ReviewSerializer(serializers.ModelSerializer) :
#     user = serializers.SerializerMethodField()
#     class Meta : 
#         fields = "__all__" 
#         model = Review   
#     def get_user(self , obj):
#         serializers =UserSerializer(obj.user)
#         return serializers.data



# class ProductSerializer (serializers.ModelSerializer) :
#     reviews = serializers.SerializerMethodField(read_only = True)
#     created_at = serializers.SerializerMethodField()
#     class Meta : 
#         model = Product 
#         fields = "__all__"

#     def get_reviews (self , obj):
        
#         serializer = ReviewSerializer(obj.reviews, many = True)
#         return serializer .data
#     def get_created_at(self , obj):
#         return obj.created_at.year



from rest_framework import serializers 
from django.contrib.auth.models import User 
from .models import  Review , Product  , Order , OrderItems , ShippingAddress




class Userserializer(serializers.ModelSerializer) :
    name = serializers.SerializerMethodField(read_only = True) 
    _id = serializers.SerializerMethodField(read_only = True) 
    isAdmin = serializers.SerializerMethodField(read_only = True)
    
    class Meta : 
        model = User 
        fields = ['_id' , 'username' , 'email' , "name" , 'isAdmin']
    def get_name(self , obj ) :
        name = obj.first_name 
        if name == "" : 
            name = obj.email
        return name
    def get__id(self , obj) : 
        return obj.id
    def get_isAdmin(self, obj) : 
        return obj.is_staff

class UserserializerWithToken(Userserializer) : 
    token = serializers.SerializerMethodField(read_only = True)
    class Meta : 
        model = User 
        fields = ['_id' , 'username' , 'email' , "name" , 'isAdmin' , 'token']
    def get_token(self , obj) : 
        token = RefreshToken.for_user(obj)
        return str(token.access_token)

class Reviewserializer(serializers.ModelSerializer) :

    class Meta : 
        fields = "__all__" 
        model = Review       
   
######################## product
class ProductSerializer (serializers.ModelSerializer) :
    reviews = serializers.SerializerMethodField(read_only = True) 
    class Meta : 
        model = Product 
        fields = '__all__'
    def get_reviews (self , obj) : 
        serializer = Reviewserializer(obj.reviews.all() , many = True) 
        return serializer.data
        
class ProductUpdateCreateSerializer (serializers.ModelSerializer) :
    reviews = serializers.SerializerMethodField(read_only = True) 
    class Meta : 
        model = Product 
        fields ="__all__"
 





class ShippingAddressSerializer (serializers.ModelSerializer) : 
    class Meta : 
        model = ShippingAddress 
        fields = '__all__'

class OrderItemsSerializer (serializers.ModelSerializer) : 
    class Meta : 
        model = OrderItems 
        fields = '__all__'
class OrderSerializer (serializers.ModelSerializer) : 
    items = serializers.SerializerMethodField(read_only = True)
    shipping_address = serializers.SerializerMethodField(read_only = True)
    user = serializers.SerializerMethodField(read_only=True)
    class Meta : 
        model = Order 
        fields = '__all__'
    def get_items(self , obj) : 
        items = obj.orderitems_set.all()
        serializer = OrderItemsSerializer(items , many =True)
        return serializer.data
    def get_shipping_address(self , obj) : 
        try: 
            address = ShippingAddressSerializer(obj.shippingAddress , many=False).data
        except :
            address = False
        return address
    def get_user(self , obj) : 
        serializer = Userserializer(obj.user  , many=False)
        return serializer.data
        
        
