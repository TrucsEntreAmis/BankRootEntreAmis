BankRootEntreAmis
===


[![Jenkins build status](https://jenkins.qth.fr/job/Validate_BankRootEntreAmis/badge/icon)](https://jenkins.qth.fr/job/Validate_NetMap)
[![Jenkins build status](https://sonar.qth.fr/api/badges/gate?key=tea:js-bankroot)](https://sonar.qth.fr/overview?id=4238)

Description
---

Requirements
---

- nodejs with npm
- Android studio + java_jdk for android dev

Install
---

- git clone https://github.com/TrucsEntreAmis/BankRootEntreAmis
- npm install -g cordova ionic (sudo it on posix OS)
- npn install

Configure project for your platform
---
- ionic platform [browser|android|ios]

Test and debug on local browser
---
- ionic serve

Build package on ./platforms/[browser|android|ios]
---
- ionic build [browser|android|ios]
