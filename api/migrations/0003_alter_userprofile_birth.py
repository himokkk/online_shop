# Generated by Django 4.1.1 on 2022-10-03 23:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0002_alter_category_options_product_image"),
    ]

    operations = [
        migrations.AlterField(
            model_name="userprofile",
            name="birth",
            field=models.DateField(blank=True, null=True),
        ),
    ]