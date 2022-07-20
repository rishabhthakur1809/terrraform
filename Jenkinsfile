pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "sudo npm install"
                sh "sudo npm run build"
            }
        }
        stage("Deploy") {
            steps {
//                  sudo rm -r /var/www/html/
                 sudo cp -r /var/lib/jenkins/workspace/testing-1/build/ /var/www/html/
            }
        }
    }
}
