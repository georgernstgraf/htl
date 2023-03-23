# DOTNET

## DOTNET NEW

### dotnet new console
```shell
mkdir urxn
cd urxn
dotnet new console (erzeugt urxn.csproj und obj/)
```

`console` ist ein template 

### listet alle templates
`dotnet new list`


## DOTNET ADD OR REMOVE PACKAGE

dotnet add package System.Data.SQLite  
dotnet add package Dapper  
add package System.Configuration.ConfigurationManager

## DOTNET BUILD

```shell
dotnet build --runtime ubuntu.22.04-x64 --self-contained true \
-property:PublishSingleFile=true --configuration Release```

## DOTNET STUFF

### Applikation ausführen

.dll direkt aufrufen  
`dotnet ./bin/Debug/net7.0/2023-03-03_sqlite.dll`

# VSCODE

Run and Debug (.NET Core Launch (Console))
`dotnet` muß im PATH vom `code` sein.



# App.config
```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <appSettings>
    <add key="beruf" value="Zahnarzt" />
  </appSettings>
  <connectionStrings>
    <add name="schurlix" connectionString="Data Source=Schurli.db"></add>
  </connectionStrings>
</configuration>
```
