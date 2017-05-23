#!/usr/bin/env bash

# 1. Compress and upload project's' content 
# 2. Add Content-Encoding gzip metadata key-value

# find ./target-grunt/dist -name "*" | cut -c 21- | xargs -I {} sh -c "gzip -c ./target-grunt/dist/{} | aws s3 cp - s3://${S3_BUCKET}/{} --content-encoding gzip"
function processFile() {
    fname=${1}
    content_type="$(file -b --mime-type ${SOURCE_PATH}/${fname})"

    gzip -c ${SOURCE_PATH}/${1} | aws s3 cp - s3://${S3_BUCKET}/${1} --content-encoding gzip --content-type ${content_type} --cache-control "max-age=86400"
    echo "Uploaded ${fname}. Content-Type: ${content_type}"
}

export SOURCE_PATH=./target-grunt/dist
export -f processFile
find ${SOURCE_PATH} -type f -name "*" | cut -c 21- | xargs -I {} bash -c 'processFile "$@"' _ {}