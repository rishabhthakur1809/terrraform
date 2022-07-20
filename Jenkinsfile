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
                 "sudo rm -r /var/www/html/"
                 "sudo cp -r ${WORKSPACE}/build/ /var/www/html/"
            }
        }
    }
}
