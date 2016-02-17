#!/bin/bash

dockerStatus=$(service docker status | grep -c stop)

if [[ "$dockerStatus" -eq "1" ]];then
    sudo service docker start
fi

presentation="javascript-the-new-hype"
sudo docker run -it -v $(pwd):/documents/ asciidoctor asciidoctor -r asciidoctor-diagram -T /asciidoctor-backends/slim/revealjs -E slim "${presentation}.adoc"
sudo chown jordan:jordan "${presentation}.html"
sudo chmod 755 "${presentation}.html"
