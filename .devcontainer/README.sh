#!/usr/bin/env bash
cd $(dirname $0)
f=../docs/common/functions.sh
[ -f $f ] || exit 1
sync_fn() {
  cp devcontainer.json \
    postCreate.sh \
    $1/
}
. $f && readme-build sync_fn
