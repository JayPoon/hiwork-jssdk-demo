pipeline {
  agent any
  stages {
    stage('prepare') {
      steps {
        echo 'preparing'
      }
    }
    stage('build') {
      steps {
        readFile 'index.html'
      }
    }
    stage('') {
      steps {
        timestamps()
      }
    }
  }
}