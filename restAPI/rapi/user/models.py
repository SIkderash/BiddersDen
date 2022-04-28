from tkinter import CASCADE
from django.db import models

# Create your models here.

class credentials(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)

class Users(models.Model):
    uid = models.CharField(primary_key=True, max_length=100)
    name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    isVerified = models.BooleanField(default=False)
    
    def __str__(self):
        return self.username

class Product(models.Model):
    uid = models.CharField(primary_key=True, max_length=100)    
    product_name = models.CharField(max_length=300)
    product_category = models.CharField(max_length=300)
    base_price = models.IntegerField()
    product_defects = models.CharField(max_length=300)
    current_price = models.IntegerField()
    recieved_date = models.CharField(max_length=100)
    shipping_date = models.CharField(max_length=100)
    delivered_date = models.CharField(max_length=100)
    isApproved = models.BooleanField(default=False)
    seller = models.ForeignKey(Users, related_name="seller", on_delete=models.CASCADE)
    buyerID = models.CharField(max_length=100)
    bidder = models.ManyToManyField(Users)
    
    def __str__(self):
        return self.product_name

class File(models.Model):
    image_file = models.FileField(blank=False, null=False)
    def __str__(self):
        return self.file.name