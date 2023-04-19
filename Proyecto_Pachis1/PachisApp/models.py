from django.db import models

# Create your models here.

class Producto(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()
    precio = models.DecimalField(max_digits=8, decimal_places=2)

    def __str__(self):
        return self.nombre

class Local(models.Model):
    nombre = models.CharField(max_length=100)
    direccion = models.CharField(max_length=200)
    correo_electronico = models.EmailField(unique=True)
    contraseña = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre

class Pedido(models.Model):
    fecha = models.DateTimeField(auto_now_add=True)
    estado = models.CharField(max_length=20, default='Pendiente')
    total = models.DecimalField(max_digits=8, decimal_places=2)

    def __str__(self):
        return str(self.id)

class DetallePedido(models.Model):
    pedido = models.ForeignKey(Pedido, on_delete=models.CASCADE, related_name='detalles')
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    cantidad = models.IntegerField()
    precio = models.DecimalField(max_digits=8, decimal_places=2)

    def __str__(self):
        return str(self.id)