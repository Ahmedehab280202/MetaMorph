export default class PomFile {
  readonly file_name: string
  readonly content: string

  constructor() {
    this.file_name = 'pom.xml'
    this.content = (
      `<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n`+
      '\n'+
      '    <modelVersion>4.0.0</modelVersion>\n'+
      '    <groupId>com.meta</groupId>\n'+
      '    <artifactId>demo-springboot</artifactId>\n'+
      '    <version>0.0.1-SNAPSHOT</version>\n'+
      '\n'+
      '    <dependencies>\n'+

      '        <dependency>\n'+
      '            <groupId>org.springframework.boot</groupId>\n'+
      '            <artifactId>spring-boot-starter-actuator</artifactId>\n'+
      '            <version>2.6.3</version>\n'+
      '        </dependency>\n'+
      '\n'+
      '        <dependency>\n'+
      '            <groupId>org.springframework.boot</groupId>\n'+
      '            <artifactId>spring-boot-starter-data-jpa</artifactId>\n'+
      '            <version>2.6.3</version>\n'+
      '        </dependency>\n'+
      '\n'+
      '        <dependency>\n'+
      '            <groupId>org.springframework.boot</groupId>\n'+
      '            <artifactId>spring-boot-starter-web</artifactId>\n'+
      '            <version>2.6.3</version>\n'+
      '        </dependency>\n'+
      '\n'+
      '        <dependency>\n'+
      '            <groupId>org.projectlombok</groupId>\n'+
      '            <artifactId>lombok</artifactId>\n'+
      '            <version>1.18.22</version>\n'+
      '        </dependency>\n'+
      '\n'+
      '        <dependency>\n'+
      '            <groupId>org.springframework.boot</groupId>\n'+
      '            <artifactId>spring-boot-starter-test</artifactId>\n'+
      '            <version>2.6.3</version>\n'+
      '            <scope>test</scope>\n'+
      '        </dependency>\n'+
      '\n'+
      '        <dependency>\n'+
      '            <groupId>jakarta.persistence</groupId>\n'+
      '            <artifactId>jakarta.persistence-api</artifactId>\n'+
      '            <version>3.0.0</version>\n'+
      '            <scope>provided</scope>\n'+
      '        </dependency>\n'+
      '\n'+
      '        <dependency>\n'+
      '            <groupId>javax.persistence</groupId>\n'+
      '            <artifactId>javax.persistence-api</artifactId>\n'+
      '            <version>2.2</version>\n'+
      '        </dependency>\n'+
      '    </dependencies>\n'+
      '\n'+
      '    <build>\n'+
      '        <plugins>\n'+

      '            <plugin>\n'+
      '                <groupId>org.springframework.boot</groupId>\n'+
      '                <artifactId>spring-boot-maven-plugin</artifactId>\n'+
      '                <version>2.6.3</version>\n'+
      '                <executions>\n'+
      '                    <execution>\n'+
      '                        <goals>\n'+
      '                            <goal>repackage</goal>\n'+
      '                        </goals>\n'+
      '                    </execution>\n'+
      '                </executions>\n'+
      '            </plugin>\n'+

      '        </plugins>\n'+
      '    </build>\n'+

      '     <repositories>\n'+
      '          <repository>\n'+
      '               <id>spring-milestones</id>\n'+
      '               <name>Spring Milestones</name>\n'+
      '               <url>https://repo.spring.io/milestone</url>\n'+
      '               <snapshots>\n'+
      '                   <enabled>false</enabled>\n'+
      '               </snapshots>\n'+
      '          </repository>\n'+
      '          <repository>\n'+
      '               <id>spring-snapshots</id>\n'+
      '               <name>Spring Snapshots</name>\n'+
      '               <url>https://repo.spring.io/snapshot</url>\n'+
      '               <releases>\n'+
      '                   <enabled>false</enabled>\n'+
      '               </releases>\n'+
      '          </repository>\n'+
      '     </repositories>\n'+

      '     <pluginRepositories>\n'+
      '          <pluginRepository>\n'+
      '               <id>spring-milestones</id>\n'+
      '               <name>Spring Milestones</name>\n'+
      '               <url>https://repo.spring.io/milestone</url>\n'+
      '               <snapshots>\n'+
      '                   <enabled>false</enabled>\n'+
      '               </snapshots>\n'+
      '          </pluginRepository>\n'+
      '          <pluginRepository>\n'+
      '               <id>spring-snapshots</id>\n'+
      '               <name>Spring Snapshots</name>\n'+
      '               <url>https://repo.spring.io/snapshot</url>\n'+
      '               <releases>\n'+
      '                   <enabled>false</enabled>\n'+
      '               </releases>\n'+
      '          </pluginRepository>\n'+
      '     </pluginRepositories>\n'+
      '</project>\n'
    )
  }
}